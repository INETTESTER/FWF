#!/bin/bash
##########################################################################
##########################################################################
##########################################################################
##########################################################################
##########################################################################
                     API="lookup_person" 
                     google_sheet="https://docs.google.com/spreadsheets/d/1tgwA1ONkGHoFRKNyCF9i2HfhLqhj7_qDkCf0H6MwkbI/edit?gid=1669863692#gid=1669863692" 
                     id="12"                 #เปลี่ยน id ทุกครั้งที่ยิง
                     user="12000";            #จำนวนผู้ใช้งาน
                     duration="1";         #วินาที
                     scenario="1"           #scenario="1" ยิงเเบบกำหนด request (duration ได้แค่ 1 วินาที)
                     cid="28"                #scenario="2" ยิงเเบบกำหนด VUs  (กำหนดว่า user x คน ใช้ระบบ x วินาที)
                                            #scenario="3" ยิงเเบบกำหนด request แต่ไม่แม่นยำ (duration กี่วินาทีก็ได้)
                     status="normal"        #พิมพ์คำว่า "normal" เพื่อยิงโหลดเเละ upload report ไปที่ sheet
                                            #พิมพ์คำว่า "report" upload report ล่าสุดไปที่ sheet
##########################################################################
##########################################################################
##########################################################################
##########################################################################
##########################################################################



































folder_report=$(date +"%d-%m-%y") #ห้ามเปลี่ยน
if [ ! -d "report/$folder_report" ]; then
  # ถ้าไม่มีให้สร้างโฟลเดอร์ folder
  mkdir "report/$folder_report"
fi

filenamex="$API-$user-$id"
if [ "$status" = "normal" ]; then
    # รัน main/main.js และรอจนกว่าจะเสร็จ

    k6 run --env id="$id" --env cid="$cid" --env projectname="$API" --env scenariox="$scenario" --env user="$user" --env durationx="$duration" --summary-export=report/"$folder_report"/"$filenamex".json main/main.js

    # รอจนกว่าการรันเสร็จสิ้น
    wait

    # รัน main/insertdata.js
    if [ -f "report/$folder_report/$filenamex.json" ]; then
        echo "✨ Uploading report...."
        k6 run --env filename="$filenamex" --env projectname="$API" --env date="$folder_report" --env id="$id" --env user="$user" --env durationx="$duration" --env google_link="$google_sheet" gafana/insertdata.js --no-summary
    fi
elif [ "$status" = "report" ]; then
    # รันแค่ main/insertdata.js
    if [ -f "report/$folder_report/$filenamex.json" ]; then
        echo "✨ Uploading report...."
        k6 run --env filename="$filenamex" --env projectname="$API" --env date="$folder_report" --env id="$id" --env user="$user" --env durationx="$duration" --env google_link="$google_sheet" gafana/insertdata.js --no-summary
    else
        echo "❌ Report not found"
    fi
else
    echo "❌ Invalid report value: $status"
fi