import http from 'k6/http';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

const imgPath = open('../file/ai-technology.png', 'b'); // binary mode
export function register() {
  const url = 'https://fdh.moph.go.th/fwf_api/v1/auth/portal/bio-id/register';
  const token = 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9...'; // <-- ใส่ token เต็มเองหรือนำเข้า

  const formData = new FormData();
  formData.append('register_date', '2025-03-18');
  formData.append('hcode', '00000');
  formData.append('title', 'นาย');
  formData.append('title_eng', 'Mr.');
  formData.append('fname', 'เทส');
  formData.append('fname_eng', 'Test');
  formData.append('lname', 'เอ็ดเวิร์ด');
  formData.append('lname_eng', 'Edward');
  formData.append('gender', '1');
  formData.append('date_of_birth', '1995-01-31');
  formData.append('race', '056');
  formData.append('address', '134/2');
  formData.append('village_no', '10');
  formData.append('lane', '-');
  formData.append('road', 'มิตรภาพขอนแก่น-หนองคาย');
  formData.append('province', 'ขอนแก่น');
  formData.append('district', 'เมืองขอนแก่น');
  formData.append('sub_district', 'ศิลา');
  formData.append('postal_code', '40000');
  formData.append('phone', '0800000000');
  formData.append('occupation', 'BT01');
  formData.append('employer_full_name', 'ทอง ดี');
  formData.append('employer_phone', '0600000000');
  formData.append('company', 'TEST');
  formData.append('cid', '1253675200123');
  formData.append('passport_no', '-');

  formData.append('front_1', http.file(imgPath, 'front_1.jpg', 'image/jpeg'));
  formData.append('front_2', http.file(imgPath, 'front_2.jpg', 'image/jpeg'));
  formData.append('front_3', http.file(imgPath, 'front_3.jpg', 'image/jpeg'));
  formData.append('left_1', http.file(imgPath, 'left_1.jpg', 'image/jpeg'));
  formData.append('right_1', http.file(imgPath, 'right_1.jpg', 'image/jpeg'));

  const headers = {
    Authorization: token,
    'Content-Type': `multipart/form-data; boundary=${formData.boundary}`,
    'Cookie': '__cfruid=5d6b8e322de6b4c57a33fe0c3f16c9cd579eedf3-1752739375'
  };

  const res = http.post(url, formData.body(), { headers });

  console.log('Response Body:', res.body);


  return res;
}
