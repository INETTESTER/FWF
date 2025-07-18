import http from 'k6/http';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

const imgPath = open('../file/images.jpg', 'b'); // binary mode
export function register(cid) {
  const cid1 = `${__VU}${__ITER}`+''+cid;
  const url = 'https://fdh.moph.go.th/fwf_api/v1/auth/portal/bio-id/register';
  const token = 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYW50YXJ1YS5pbmV0QDAwMDAwIiwiaWF0IjoxNzUyNzYwMjc5LCJleHAiOjE3NTI3NzEwNzksImlzcyI6Ik1PUEggQWNjb3VudCBDZW50ZXIiLCJhdWQiOiJNT1BIIEFQSSIsImNsaWVudCI6eyJ1c2VyX2lkIjoxMSwidXNlcl9oYXNoIjoiMjlGMEQzRTY0ODlFM0ZCMkFGNDlBQzZCMkUxOUUyMTE3RTQ1OEVGNEVFRUQyMEJFNDRDMTNEMTgzREUxRTAwRDhFQzkiLCJsb2dpbiI6InBhbnRhcnVhLmluZXQiLCJuYW1lIjoi4Liq4Li44Lig4Lix4LiX4LijIOC4m-C4seC4meC4l-C5iOC4suC5gOC4o-C4t-C4rSIsImhvc3BpdGFsX25hbWUiOiLguYLguKPguIfguJ7guKLguLLguJrguLLguKXguJfguJTguKrguK3guJrguKPguLDguJrguJoiLCJob3NwaXRhbF9jb2RlIjoiMDAwMDAiLCJlbWFpbCI6InMucGFudGFydWFAZ21haWwuY29tIiwiYWNjb3VudF9hY3RpdmF0ZWQiOnRydWUsImFjY291bnRfc3VzcGVuZGVkIjpmYWxzZSwibGFzdF9jaGFuZ2VfcGFzc3dvcmQiOjE3NDI4MzkwNTYsImxhc3RfY29uZmlybV9vdHAiOjE3NTI2NjIyMzksImNpZF9oYXNoIjoiRDdBOUE2QTU5NkUwNUY1NjQxOUJENTZCNkJCNTMzNjQ6MTIiLCJjaWRfZW5jcnlwdCI6IjQ4NjQ4QjU2MkQ2NTY2QUJFOUZBNTIyOUVENjUwNEUxMjY3NDk3REE4OUE1N0FDNjJGODdFMzQyM0YyNTZEQTVBQjcwRkE2RTYxOENGNkZFM0EwQTc5QkZCNCIsImNpZF9hZXMiOiJFb1JZbjhHWWJiOHdiYStzMFkyWmhBPT0iLCJjbGllbnRfaXAiOiIyMDMuMTUwLjIxLjcwIiwic2NvcGUiOlt7ImNvZGUiOiJNT1BIX0NMQUlNOjEifSx7ImNvZGUiOiJNT1BIX0NMQUlNX0FQSToxIn0seyJjb2RlIjoiTU9QSF9BQ0NPVU5UX0NFTlRFUl9BRE1JTjoxIn1dLCJyb2xlIjpbIm1vcGgtYXBpIl0sInNjb3BlX2xpc3QiOiJbTU9QSF9DTEFJTToxXVtNT1BIX0NMQUlNX0FQSToxXVtNT1BIX0FDQ09VTlRfQ0VOVEVSX0FETUlOOjFdIiwiYWNjZXNzX2NvZGVfbGV2ZWwxIjoiJzAwMDAwJyIsImFjY2Vzc19jb2RlX2xldmVsMiI6IicnIiwiYWNjZXNzX2NvZGVfbGV2ZWwzIjoiJyciLCJhY2Nlc3NfY29kZV9sZXZlbDQiOiInJyIsImFjY2Vzc19jb2RlX2xldmVsNSI6IicnIn19.hldjIwQpVvCzpOJ4gOEHx5-CenL1scEH0vYNEhOnB-45IubawQ8ToPObV3wGlXQy5UzeBklgwo_sSjbCb4EgST_4UJRHqrmBd5cPxtXjAkIBlgNebarErTfVFdoNAD6y_CuVwRm54f2iSarp1isUzF-ffQXwudc2IFRXXT3qImGuOQXvnjtKPx68neUO_ccDZS9fS--5r6_jY76oDTgXS-9s41S_8g2UwR4R-5Ajk0G8cNzCQ5kWt4NrAS8AFkOF6XOtcDkO_9G60wLFBOqzni9zQyayey02TU3ndc7tTtkVW_v7BHqYG-hRSQWt1DAlqPwxo0Qd_DujoKMHVXuW1xs3TbRLDCy5rFnYudfnf0ZLoDfhq9N5SZTexF6d5P--KevwS0oE-sSdOKZLYHOYJNLO2GjiFb5TJB6_FCLzExCEZmxrJLDgfPon8lU02a5JI1IZD4SMgnUaelZd59nA5GJZL0s6inUgNxpftUqiJTO5MWqAeFBJY8n2HTx6CFpl4l7dExyBq7YPJcD3H4-3veFf9IPNFPAzwwTXHxvlap94X17Fj4VDS2gCqwzkNSHKYyg0nlHsyGCKP9d8HogbLQ1SSg76qMg91avs0OqAysaRaoxKfFW_dJ0syyLaC0hLigPb3DmFNLd9ZSw7-MUgyUczziEin93C00xFqPOgvO0'; // <-- ใส่ token เต็มเองหรือนำเข้า
  //console.log(cid1);
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
  formData.append('cid', ''+cid1);
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

  const res = http.post(url, formData.body(), {
    headers,
    timeout: '120s' // ✅ ตรงนี้ถึงจะมีผล
  });

  //console.log('Response Body:', res.body);


  return res;
}
