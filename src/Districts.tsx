import { useEffect, useState } from 'react';
import Map from './components/Map'

import './index.css'
import Footer from './components/Footer';
import { Dataset, DatasetList } from './datasets';
// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AppNav from './components/AppNav';

const Home = () => {
  
  const [dataset,] = useState<Dataset>(DatasetList[0]);
  const [districtId, setDistrictId] = useState("")
  const [districtContent, setDistrictContent] = useState(undefined)
  const [districtSP,setDistrictSP] = useState(undefined)
  const [districtEWM,setDistrictEWM] = useState(undefined)

  const Ewm = [
      {
          "District": "Ananthapuramu",
          "Name": "SP Tucker IAS Retd",
          "Position": "Former CS AP",
          "Email": "sptucker1981@gmail.com",
          "District HQ": "Anantapur",
          "Old District": "Anantapur",
          "district_id": "ananthapuramu"
      },
      {
          "District": "Sri Sathya Sai",
          "Name": "SP Tucker IAS Retd",
          "Position": "Former CS AP",
          "Email": "sptucker1981@gmail.com",
          "District HQ": "Puttaparthi",
          "Old District": "Anantapur",
          "district_id": "sri_sathya_sai"
      },
      {
          "District": "Kurnool",
          "Name": "WR Reddy IAS Retd",
          "Position": "Former DG NIRD, Kerala",
          "Email": "wrreddy@gmail.com",
          "District HQ": "Kurnool",
          "Old District": "Kurnool",
          "district_id": "kurnool"
      },
      {
          "District": "Nandyal",
          "Name": "WR Reddy IAS Retd",
          "Position": "Former DG NIRD, Kerala",
          "Email": "wrreddy@gmail.com",
          "District HQ": "Nandyal",
          "Old District": "Kurnool",
          "district_id": "nandyal"
      },
      {
          "District": "YSR Kadapa",
          "Name": "Ashok Kumar IAS Retd",
          "Position": "Former Collector Kadapa & former Spl Secy Water Resources GOI",
          "Email": null,
          "District HQ": "Kadapa",
          "Old District": "YSR Kadapa",
          "district_id": "ysr_kadapa"
      },
      {
          "District": "Chittoor",
          "Name": "Dr P Raghu IRS Retd",
          "Position": "Former DG Investigation, member CFD",
          "Email": "raghup06@gmail.com",
          "District HQ": "Chittoor",
          "Old District": "Chittoor",
          "district_id": "chittoor"
      },
      {
          "District": "Annamayya",
          "Name": "Dr P Raghu IRS Retd",
          "Position": "Former DG Investigation, member CFD",
          "Email": "raghup06@gmail.com",
          "District HQ": "Rayachoti/Madanapalli",
          "Old District": "Chittoor",
          "district_id": "annamayya"
      },
      {
          "District": "Tirupati",
          "Name": "Dr P Raghu IRS Retd",
          "Position": "Former DG Investigation, member CFD",
          "Email": "raghup06@gmail.com",
          "District HQ": "Tirupati",
          "Old District": "Chittoor",
          "district_id": "tirupati"
      },
      {
          "District": "Sri Potti Sriramulu Nellore",
          "Name": "RS Naik IAS Retd",
          "Position": "Former Collector Kurnool",
          "Email": "ramasankar97@gmail.com",
          "District HQ": "Nellore",
          "Old District": "Sri Potti Sriramulu Nellore",
          "district_id": "sri_potti_sriramulu_nellore"
      },
      {
          "District": "Prakasam",
          "Name": "D Chakrapani IAS Retd",
          "Position": "Former DG HRD Institute, AP",
          "Email": "chakrapaniias@gmail.com",
          "District HQ": "Ongole",
          "Old District": "Prakasam",
          "district_id": "prakasam"
      },
      {
          "District": "Guntur",
          "Name": "GVK Rao IAS Retd",
          "Position": "Former Chairman Coffee Board & former Advisor AP, Karnataka",
          "Email": "gvkrishnarau@gmail.com",
          "District HQ": "Guntur",
          "Old District": "Guntur",
          "district_id": "guntur"
      },
      {
          "District": "Bapatla",
          "Name": "GVK Rao IAS Retd",
          "Position": "Former Chairman Coffee Board & former Advisor AP, Karnataka",
          "Email": "gvkrishnarau@gmail.com",
          "District HQ": "Bapatla",
          "Old District": "Guntur",
          "district_id": "bapatla"
      },
      {
          "District": "Palnadu",
          "Name": "GVK Rao IAS Retd",
          "Position": "Former Chairman Coffee Board & former Advisor AP, Karnataka",
          "Email": "gvkrishnarau@gmail.com",
          "District HQ": "Narasaraopet",
          "Old District": "Guntur",
          "district_id": "palnadu"
      },
      {
          "District": "Krishna",
          "Name": "Dr Rajiv Sarma",
          "Position": "Former CS Telangana & former Principal Advisor",
          "Email": "rsharma.ias@gmail.com",
          "District HQ": "Machilipatnam",
          "Old District": "Krishna",
          "district_id": "krishna"
      },
      {
          "District": "NTR",
          "Name": "Dr Rajiv Sarma",
          "Position": "Former CS Telangana & former Principal Advisor",
          "Email": "rsharma.ias@gmail.com",
          "District HQ": "Vijayawada",
          "Old District": "Krishna",
          "district_id": "ntr"
      },
      {
          "District": "Krishna",
          "Name": "T Suresh Babu",
          "Position": "MEA - GOI & former Ambassador to Mongolia",
          "Email": "arnimarao@yahoo.co.in",
          "District HQ": "Machilipatnam",
          "Old District": "Krishna",
          "district_id": "krishna"
      },
      {
          "District": "NTR",
          "Name": "T Suresh Babu",
          "Position": "MEA - GOI & former Ambassador to Mongolia",
          "Email": "arnimarao@yahoo.co.in",
          "District HQ": "Vijayawada",
          "Old District": "Krishna",
          "district_id": "ntr"
      },
      {
          "District": "West Godavari",
          "Name": "Smt A Lakshmi",
          "Position": "Retd District Judge",
          "Email": "adabala.lakshmi@gmail.com",
          "District HQ": "Bhimavaram",
          "Old District": "West Godavari",
          "district_id": "west_godavari"
      },
      {
          "District": "Eluru",
          "Name": "Smt A Lakshmi",
          "Position": "Retd District Judge",
          "Email": "adabala.lakshmi@gmail.com",
          "District HQ": "Eluru",
          "Old District": "West Godavari",
          "district_id": "eluru"
      },
      {
          "District": "Kakinada",
          "Name": "Skandan Kumar Krishnan IAS Retd",
          "Position": "Former Additional Secretary Home & former Advisor to Governor J&K",
          "Email": "skandan56@gmail.com",
          "District HQ": "Kakinada",
          "Old District": "East Godavari",
          "district_id": "kakinada"
      },
      {
          "District": "Dr. B.R. Ambedkar Konaseema",
          "Name": "Skandan Kumar Krishnan IAS Retd",
          "Position": "Former Additional Secretary Home & former Advisor to Governor J&K",
          "Email": "skandan56@gmail.com",
          "District HQ": "Amalapuram",
          "Old District": "East Godavari",
          "district_id": "dr_b_r_ambedkar_konaseema"
      },
      {
          "District": "East Godavari",
          "Name": "Skandan Kumar Krishnan IAS Retd",
          "Position": "Former Additional Secretary Home & former Advisor to Governor J&K",
          "Email": "skandan56@gmail.com",
          "District HQ": "Rajahmundry",
          "Old District": "East Godavari",
          "district_id": "east_godavari"
      },
      {
          "District": "Visakhapatnam",
          "Name": "Dr Dalip Singh",
          "Position": "Former Secretary Steel & Mines & former SEC Haryana",
          "Email": "dalip1982@outlook.com",
          "District HQ": "Visakhapatnam",
          "Old District": "Visakhapatnam",
          "district_id": "visakhapatnam"
      },
      {
          "District": "Anakapalli",
          "Name": "Dr Dalip Singh",
          "Position": "Former Secretary Steel & Mines & former SEC Haryana",
          "Email": "dalip1982@outlook.com",
          "District HQ": "Anakapalli",
          "Old District": "Visakhapatnam",
          "district_id": "anakapalli"
      },
      {
          "District": "Alluri Sitharama Raju",
          "Name": "Dr Dalip Singh",
          "Position": "Former Secretary Steel & Mines & former SEC Haryana",
          "Email": "dalip1982@outlook.com",
          "District HQ": "Paderu",
          "Old District": "Visakhapatnam",
          "district_id": "alluri_sitharama_raju"
      },
      {
          "District": "Vizianagaram",
          "Name": "Ajay Mishra IAS Retd",
          "Position": "Former Spl CS & presently Chairman Redcross Telangana",
          "Email": "misraajay2020@gmail.com",
          "District HQ": "Vizianagaram",
          "Old District": "Vizianagaram",
          "district_id": "vizianagaram"
      },
      {
          "District": "Srikakulam",
          "Name": "CBS Venkataramana IAS Retd",
          "Position": "Former Spl Secretary Atomic Energy",
          "Email": "balasatya@hotmail.com",
          "District HQ": "Srikakulam",
          "Old District": "Srikakulam",
          "district_id": "srikakulam"
      },
      {
          "District": "Parvathipuram Manyam",
          "Name": "Ajay Mishra IAS Retd",
          "Position": "Former Spl CS & presently Chairman Redcross Telangana",
          "Email": "misraajay2020@gmail.com",
          "District HQ": "Parvathipuram",
          "Old District": "Vizianagaram",
          "district_id": "parvathipuram_manyam"
      }
  ]

  const Sp = [
      {
          "sl_no": 1,
          "zone": "Zone 1",
          "district": "Srikakulam",
          "name_of_the_sp": "G.R.Radhika",
          "email_id": "sp@skl.appolice.gov.in",
          "district_id": "srikakulam"
      },
      {
          "sl_no": 2,
          "zone": "Zone 1",
          "district": "Vizianagaram",
          "name_of_the_sp": "Smt. M.Deepika",
          "email_id": "spvzm@appolice.gov.in",
          "district_id": "vizianagaram"
      },
      {
          "sl_no": 1,
          "zone": "Zone 1",
          "district": "Parvathipuram Manyam",
          "name_of_the_sp": "Vikrant Patil",
          "email_id": "sppvpmanyam@gmail.com",
          "district_id": "parvathipuram_manyam"
      },
      {
          "sl_no": 4,
          "zone": "Zone 1",
          "district": "Alluri Sitharama Raju",
          "name_of_the_sp": "Tuhin Sinha",
          "email_id": "sp.asr123@gmail.com",
          "district_id": "alluri_sitharama_raju"
      },
      {
          "sl_no": 5,
          "zone": "Zone 1",
          "district": "Visakhapatnam",
          "name_of_the_sp": "Ravi Shankar",
          "email_id": "cp@vspc.appolice.gov.in",
          "district_id": "visakhapatnam"
      },
      {
          "sl_no": 6,
          "zone": "Zone 1",
          "district": "Anakapalli",
          "name_of_the_sp": "Gowthami Sali",
          "email_id": "sppvpmanyam@gmail.com",
          "district_id": "anakapalli"
      },
      {
          "sl_no": 7,
          "zone": "Zone 2",
          "district": "Kakinada",
          "name_of_the_sp": "Sathish Kumar",
          "email_id": "sp@kkd.appolice.gov.in",
          "district_id": "kakinada"
      },
      {
          "sl_no": 8,
          "zone": "Zone 2",
          "district": "Dr. B.R. Ambedkar Konaseema",
          "name_of_the_sp": "S. Sreedhar",
          "email_id": "spkonaseema@gmail.com",
          "district_id": "dr_b_r_ambedkar_konaseema"
      },
      {
          "sl_no": 2,
          "zone": "Zone 2",
          "district": "East Godavari",
          "name_of_the_sp": "Jagadeesh P",
          "email_id": "sp@rjyu.appolice.gov.in",
          "district_id": "east_godavari"
      },
      {
          "sl_no": 10,
          "zone": "Zone 2",
          "district": "West Godavari",
          "name_of_the_sp": "U.Ravi Prakash",
          "email_id": "spwgbvrm@gmail.com",
          "district_id": "west_godavari"
      },
      {
          "sl_no": 11,
          "zone": "Zone 2",
          "district": "Eluru",
          "name_of_the_sp": "D.Mary Prasanthi",
          "email_id": "sp@wg.appolice.gov.in, westgodavarisp@gmail.com",
          "district_id": "eluru"
      },
      {
          "sl_no": 12,
          "zone": "Zone 3",
          "district": "Krishna",
          "name_of_the_sp": "P.Joshua",
          "email_id": "sp@kri.appolice.gov.in, spkrishnadist@gmail.com",
          "district_id": "krishna"
      },
      {
          "sl_no": 13,
          "zone": "Zone 3",
          "district": "NTR",
          "name_of_the_sp": "Shri Kanthi Rana Tata",
          "email_id": "cp@vza.appolice.gov.in",
          "district_id": "ntr"
      },
      {
          "sl_no": 14,
          "zone": "Zone 3",
          "district": "Guntur",
          "name_of_the_sp": "K.Arif Hafeez",
          "email_id": "sp@gtr.appolice.gov.in, guntururbansp@gmail.com",
          "district_id": "guntur"
      },
      {
          "sl_no": 15,
          "zone": "Zone 3",
          "district": "Bapatla",
          "name_of_the_sp": "Sri Vakul Jindal",
          "email_id": "sp@bpt.appolice.gov.in",
          "district_id": "bapatla"
      },
      {
          "sl_no": 16,
          "zone": "Zone 3",
          "district": "Palnadu",
          "name_of_the_sp": "Sri Y. Ravi Sankara Reddy",
          "email_id": "spgunturrural@gmail.com",
          "district_id": "palnadu"
      },
      {
          "sl_no": 17,
          "zone": "Zone 4",
          "district": "Prakasam",
          "name_of_the_sp": "Malika Garg",
          "email_id": "spongole@gmail.com",
          "district_id": "prakasam"
      },
      {
          "sl_no": 18,
          "zone": "Zone 4",
          "district": "Sri Potti Sriramulu Nellore",
          "name_of_the_sp": "K.Tirumaleswar Reddy",
          "email_id": "nelloresp@gmail.com",
          "district_id": "sri_potti_sriramulu_nellore"
      },
      {
          "sl_no": 19,
          "zone": "Zone 5",
          "district": "Kurnool",
          "name_of_the_sp": "G. Krishnakanth",
          "email_id": "spkurnool.kur@gmail.com",
          "district_id": "kurnool"
      },
      {
          "sl_no": 20,
          "zone": "Zone 5",
          "district": "Nandyal",
          "name_of_the_sp": "Sri K.Raghuveera Reddy",
          "email_id": "spnandyal.official@gmail.com",
          "district_id": "nandyal"
      },
      {
          "sl_no": 21,
          "zone": "Zone 5",
          "district": "Ananthapuramu",
          "name_of_the_sp": "Anburajan Kkn",
          "email_id": "spatp1@gmail.com",
          "district_id": "ananthapuramu"
      },
      {
          "sl_no": 3,
          "zone": "Zone 5",
          "district": "Sri Sathya Sai",
          "name_of_the_sp": "S.V. Madhav Reddy",
          "email_id": "spsss1ptp@gmail.com",
          "district_id": "sri_sathya_sai"
      },
      {
          "sl_no": 23,
          "zone": "Zone 5",
          "district": "YSR Kadapa",
          "name_of_the_sp": "Siddharth Kaushal",
          "email_id": "spkadapa2014@gmail.com",
          "district_id": "ysr_kadapa"
      },
      {
          "sl_no": 24,
          "zone": "Zone 4",
          "district": "Annamayya",
          "name_of_the_sp": "B.Krishna Rao",
          "email_id": "spannamayyadistrict@gmail.com",
          "district_id": "annamayya"
      },
      {
          "sl_no": 25,
          "zone": "Zone 4",
          "district": "Chittoor",
          "name_of_the_sp": "Y.Rishanth Reddy",
          "email_id": "spctr@appolice.gov.in, apchittoor@gmail.com",
          "district_id": "chittoor"
      },
      {
          "sl_no": 26,
          "zone": "Zone 4",
          "district": "Tirupati",
          "name_of_the_sp": "Sri P Parameshwar Reddy",
          "email_id": "sptpturban@gmail.com",
          "district_id": "tirupati"
      }
  ]

  const officers = [
    {
        "District No": 1,
        "District Name": "Srikakulam",
        "Name": "Sri. Shrikesh B Lathkar",
        "Designation": "District Election Officer",
        "Mobile No": 9849903786,
        "E-mail": "collector_sklm@ap.gov.in",
        "district_id": "srikakulam"
    },
    {
        "District No": 2,
        "District Name": "Vizianagaram",
        "Name": "Ms NAGALAKSHMI S IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9490194666,
        "E-mail": "collector_vznm@ap.gov.in",
        "district_id": "vizianagaram"
    },
    {
        "District No": 3,
        "District Name": "Parvathipuram Manyam",
        "Name": "Nishant Kumar.I.A.S.",
        "Designation": "District Election Officer",
        "Mobile No": 8688081801,
        "E-mail": "collector-pmanyam@ap.gov.in",
        "district_id": "parvathipuram_manyam"
    },
    {
        "District No": 4,
        "District Name": "Alluri Sitharama Raju",
        "Name": "Sri Sumit Kumar IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9966116212,
        "E-mail": "collector-alluri@ap.gov.in",
        "district_id": "alluri_sitharama_raju"
    },
    {
        "District No": 5,
        "District Name": "Visakhapatnam",
        "Name": "MALLIKARJUNA",
        "Designation": "District Election Officer",
        "Mobile No": 8331093001,
        "E-mail": "collector_vspm@ap.gov.in",
        "district_id": "visakhapatnam"
    },
    {
        "District No": 6,
        "District Name": "Anakapalli",
        "Name": "PATTANSHETTI RAVI SUBHASH",
        "Designation": "District Election Officer",
        "Mobile No": 7396696684,
        "E-mail": "collector-ankp@ap.gov.in",
        "district_id": "anakapalli"
    },
    {
        "District No": 7,
        "District Name": "Kakinada",
        "Name": "Kritika Shukla IAS",
        "Designation": "District Election Officer",
        "Mobile No": 7993332244,
        "E-mail": "collector-kkd@ap.gov.in",
        "district_id": "kakinada"
    },
    {
        "District No": 8,
        "District Name": "Dr. B.R. Ambedkar Konaseema",
        "Name": "SRI HIMANSHU SHUKLA I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 8977935211,
        "E-mail": "collector-ksm@ap.gov.in",
        "district_id": "dr_b_r_ambedkar_konaseema"
    },
    {
        "District No": 9,
        "District Name": "East Godavari",
        "Name": "Dr.K.Madhavi Latha IAS.",
        "Designation": "District Election Officer",
        "Mobile No": 8977935601,
        "E-mail": "collector_egd@ap.gov.in",
        "district_id": "east_godavari"
    },
    {
        "District No": 10,
        "District Name": "West Godavari",
        "Name": "P. Prasanthi I A S",
        "Designation": "District Election Officer",
        "Mobile No": 8877897789,
        "E-mail": "collector_wgd@ap.gov.in",
        "district_id": "west_godavari"
    },
    {
        "District No": 11,
        "District Name": "Eluru",
        "Name": "V. Prasanna Venkatesh",
        "Designation": "District Election Officer",
        "Mobile No": 9491041488,
        "E-mail": "collector-eluru@ap.gov.in",
        "district_id": "eluru"
    },
    {
        "District No": 12,
        "District Name": "Krishna",
        "Name": "Sri P Raja Babu",
        "Designation": "District Election Officer",
        "Mobile No": 9849903968,
        "E-mail": "collector_krsn@ap.gov.in",
        "district_id": "krishna"
    },
    {
        "District No": 13,
        "District Name": "NTR",
        "Name": "Sri. S.Dilli Rao. I.A.S.",
        "Designation": "District Election Officer",
        "Mobile No": 9849903959,
        "E-mail": "collector.ntr@gmail.com",
        "district_id": "ntr"
    },
    {
        "District No": 14,
        "District Name": "Guntur",
        "Name": "Sri M. Venu Gopal Reddy I.A.S.",
        "Designation": "District Election Officer",
        "Mobile No": 9849904002,
        "E-mail": "collector_gntr@ap.gov.in",
        "district_id": "guntur"
    },
    {
        "District No": 15,
        "District Name": "Bapatla",
        "Name": "Sri P Ranjit Basha I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 9492907147,
        "E-mail": "collectorbapatla@gmail.com",
        "district_id": "bapatla"
    },
    {
        "District No": 16,
        "District Name": "Palnadu",
        "Name": "SIVA SANKAR LOTHETI IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9154959301,
        "E-mail": "collector-palnadu@ap.gov.in",
        "district_id": "palnadu"
    },
    {
        "District No": 17,
        "District Name": "Prakasam",
        "Name": "Dinesh Kumar A.S",
        "Designation": "District Election Officer",
        "Mobile No": 8886616019,
        "E-mail": "collector_pkm@ap.gov.in",
        "district_id": "prakasam"
    },
    {
        "District No": 18,
        "District Name": "Sri Potti Sriramulu Nellore",
        "Name": "Hari Narayanan M",
        "Designation": "District Election Officer",
        "Mobile No": 9849904051,
        "E-mail": "collector_nlr@ap.gov.in",
        "district_id": "sri_potti_sriramulu_nellore"
    },
    {
        "District No": 19,
        "District Name": "Kurnool",
        "Name": "Dr G Srijana IAS",
        "Designation": "District Election Officer",
        "Mobile No": 9491017555,
        "E-mail": "kurnoolcollector@gmail.com",
        "district_id": "kurnool"
    },
    {
        "District No": 20,
        "District Name": "Nandyal",
        "Name": "Sri Dr. Manazir Jeelani Samoon I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 9642103123,
        "E-mail": "collector-nandyal@ap.gov.in",
        "district_id": "nandyal"
    },
    {
        "District No": 21,
        "District Name": "Ananthapuramu",
        "Name": "M Gowthami",
        "Designation": "District Election Officer",
        "Mobile No": 9492744442,
        "E-mail": "Collector_antp@ap.gov.in",
        "district_id": "ananthapuramu"
    },
    {
        "District No": 22,
        "District Name": "Sri Sathya Sai",
        "Name": "P Arun Babu",
        "Designation": "District Election Officer",
        "Mobile No": 9032816888,
        "E-mail": "collector-sssai@ap.gov.in",
        "district_id": "sri_sathya_sai"
    },
    {
        "District No": 23,
        "District Name": "YSR Kadapa",
        "Name": "Vijay Rama Raju V",
        "Designation": "District Election Officer",
        "Mobile No": 9849904109,
        "E-mail": "Collector_kdp@ap.gov.in",
        "district_id": "ysr_kadapa"
    },
    {
        "District No": 24,
        "District Name": "Annamayya",
        "Name": "P.S.Girisha",
        "Designation": "District Election Officer",
        "Mobile No": 8977942404,
        "E-mail": "collector-annamayya@ap.gov.in",
        "district_id": "annamayya"
    },
    {
        "District No": 25,
        "District Name": "Chittoor",
        "Name": "Shan Mohan Sagili I.A.S",
        "Designation": "District Election Officer",
        "Mobile No": 9491077001,
        "E-mail": "collectorchittoor@gmail.com",
        "district_id": "chittoor"
    },
    {
        "District No": 26,
        "District Name": "Tirupati",
        "Name": "K Venkata Ramana ReddyIAS",
        "Designation": "District Election Officer",
        "Mobile No": 6281155946,
        "E-mail": "collector-tirupati@ap.gov.in",
        "district_id": "tirupati"
    }
]
    


  useEffect(()=>{

      // console.log(officers)

  }, [])
  

  const RightContainer = (d:any)=>{



    let content = <div className="table-responsive-sm">

        {/*<div>
          {districtId}
        </div>*/}

        <div>
          CEO Office
        </div>

        <Table striped bordered size="sm">
      <thead>
        <tr>
          
          <th>Designation</th>
          <th>Name</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Chief Electoral Officer</td>
          <td>Sri Mukesh Kumar Meena</td>
          <td>ceo_andhrapradesh@eci.gov.in 08632445360</td>
        </tr>
        <tr>
          
          <td>Addl CEO</td>
          <td>Sri Harindra Prasad</td>
          <td>Peshi +919059450530</td>
        </tr>
        <tr>
          
          <td>Addl CEO</td>
          <td>Sri Koteswararao</td>
          <td>Peshi +917075491431</td>

        </tr>

        <tr>
          
          <td>Joint CEO</td>
          <td>Sri Venkateswararao</td>
          <td>ceo_andhrapradesh@eci.gov.in</td>
          
        </tr>
      </tbody>
    </Table>


    </div>

    if(d.d) {
      content = undefined
    }

    return <div> {content}
      
    </div>
  }

  

  const mapClick = (districtId: string) =>{
    setDistrictId(districtId);

    console.log(districtId)
    let o  = officers.find((i)=>i['district_id'].toLowerCase()==districtId.toLowerCase());
    let e = Sp.find((i)=>i['district_id'].toLowerCase()==districtId.toLowerCase());
    let u = Ewm.find((i)=>i['district_id'].toLowerCase()==districtId.toLowerCase());
    setDistrictContent(o)
    setDistrictSP(e)
    setDistrictEWM(u)

    if(districtId=="") {
      setDistrictContent(undefined);
      setDistrictSP(undefined);
      setDistrictEWM(undefined);
    }
  }


  const Deo = (d: any) =>{
    
    let content

    if(d && d.d) {

    content =  <Table striped bordered size="sm">

      <thead>
      <h6>District Election officers</h6>
        <tr>
          
          <td>Name</td>
          <td>Designation</td>
          <td>Mobile</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{d.d["Name"]}</td>
        <td>{d.d["Designation"]}</td>
        <td>{d.d["Mobile No"]}</td>
        <td>{d.d["E-mail"]}</td>
      </tr>
    </tbody>

    </Table>

    }
    return  <>{content}</>
  }

  const SPolice = (d: any) =>{
    
    let content

    if(d && d.d) {

    content =  <Table striped bordered size="sm">

      <thead>
      <h6>Superintendent of Police</h6>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{d.d["name_of_the_sp"]}</td>
        <td>{d.d["email_id"]}</td>
      </tr>
    </tbody>

    </Table>

    }
    return  <>{content}</>
  }

  const EWatch = (d: any) =>{
    
    let content

    if(d && d.d) {

    content =  <Table striped bordered size="sm">

      <thead>
      <h6>Election Watch Members</h6>
        <tr>
          
          <td>Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{d.d["Name"]}</td>
        <td>{d.d["Email"]}</td>
      </tr>
    </tbody>

    </Table>

    }
    return  <>{content}</>
  }
  

  return (


    <div className='App'>

    <Container fluid>
      <Row>
        <div  className='side-nav-div'>
          <AppNav />
        </div>
        <div className='side-cont-div'>
          <Container>
            <Row>
              <Col xs="12">
              <h2 className="header-margin">Andhra Pradesh</h2>
              </Col>
              <Col>
              
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
              <Map link={dataset.link} map={dataset.map} mapClick={mapClick} propName={"dist"}/>
              </Col>
              <Col lg="6" md="12">
              <RightContainer d={districtContent}/>
              <h3>{districtId}</h3>
              <Deo d={districtContent} />
              <SPolice d={districtSP}/>
              <EWatch d={districtEWM}/>
              </Col>
            </Row>
            <Row>
              <Col>
              <Footer />
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
    </div>
  )
}

export default Home
