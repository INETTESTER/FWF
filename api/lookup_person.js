import http from 'k6/http';

export function lookup_person() {
  const url = 'https://fdh.moph.go.th/fwf_api/v1/auth/portal/bio-id/lookup-person';

  const payload = JSON.stringify({
    fcode: "",
    first_name: "",
    last_name: "",
    register_start_date: "",
    register_end_date: "",
    cid: "",
    passport_no: "",
    size: 100,
    page: 1
  });

  const headers = {
    'Content-Type': 'application/json',
    'Cookie': '__cfruid=5d6b8e322de6b4c57a33fe0c3f16c9cd579eedf3-1752739375'
  };

  const res = http.post(url, payload, { headers,timeout: '240s' });

  //console.log('Response body:', res.body);

  return res;
}
