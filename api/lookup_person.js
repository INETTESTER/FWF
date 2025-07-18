import http from 'k6/http';

export function lookup_person() {
  const url = 'https://fdh.moph.go.th/fwf_api/v1/auth/portal/bio-id/lookup-person';
  const query = '?cid=null&passport_no=null&fcode=null&first_name=null&last_name=null&register_end_date=16-07-2025&register_start_date=16-07-2025&page=1&size=10';

  const headers = {
    Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9....', // กรุณาแทนที่ด้วย token จริง
    Cookie: '__cfruid=5d6b8e322de6b4c57a33fe0c3f16c9cd579eedf3-1752739375'
  };

  const res = http.get(`${url}${query}`, { headers });

  console.log('Response body:', res.body);

  return res;
}
