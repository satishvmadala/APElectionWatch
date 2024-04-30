import { useState, useEffect } from 'react';
import AssemblyMap from './components/AssemblyMap'
import AppNav from './components/AppNav.jsx'
import './index.css'
import Footer from './components/Footer';
import { Dataset, DatasetList2 } from './datasets';
// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';



const Assembly = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [dataset, setDataset] = useState<Dataset>(DatasetList2[0]);
  const [districtId, setDistrictId] = useState("")
  const [constituencyId, setconstituencyId] = useState("")   
  const [districtContent, setDistrictContent] = useState(undefined) 
  const updateDataset = (dataset: Dataset) => {
    setDataset(dataset);
    setOpenPopup(false);
  }

  const officers1= [
    {
        "ac_no": 1,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Ichchapuram",
        "dsp_name": "Nageswar Reddy",
        "mobile_no": "6309990805",
        "district_id": "srikakulam",
        "constituency_id": "ichchapuram"
    },
    {
        "ac_no": 2,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Palasa",
        "dsp_name": "Nageswar Reddy",
        "mobile_no": "6309990805",
        "district_id": "srikakulam",
        "constituency_id": "palasa"
    },
    {
        "ac_no": 3,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Tekkali",
        "dsp_name": "Balachandra Reddy",
        "mobile_no": "6309990811",
        "district_id": "srikakulam",
        "constituency_id": "tekkali"
    },
    {
        "ac_no": 4,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Pathapatnam",
        "dsp_name": "Balachandra Reddy",
        "mobile_no": "6309990811",
        "district_id": "srikakulam",
        "constituency_id": "pathapatnam"
    },
    {
        "ac_no": 5,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Srikakulam",
        "dsp_name": "Y.Sruthi",
        "mobile_no": "6309990804",
        "district_id": "srikakulam",
        "constituency_id": "srikakulam"
    },
    {
        "ac_no": 6,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Amadalavalasa",
        "dsp_name": "Y.Sruthi",
        "mobile_no": "6309990804",
        "district_id": "srikakulam",
        "constituency_id": "amadalavalasa"
    },
    {
        "ac_no": 7,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Etcherla",
        "dsp_name": "Y.Sruthi",
        "mobile_no": "6309990804",
        "district_id": "srikakulam",
        "constituency_id": "etcherla"
    },
    {
        "ac_no": 8,
        "zone": "Zone 1",
        "district_no": 1,
        "district_name": "Srikakulam",
        "ac_name": "Narasannapeta",
        "dsp_name": "Balachandra Reddy",
        "mobile_no": "6309990811",
        "district_id": "srikakulam",
        "constituency_id": "narasannapeta"
    },
    {
        "ac_no": 9,
        "zone": "Zone 1",
        "district_no": 2,
        "district_name": "Vizianagaram",
        "ac_name": "Rajam",
        "dsp_name": "Kalyan Chakravathi",
        "mobile_no": "9121109408",
        "district_id": "vizianagaram",
        "constituency_id": "rajam"
    },
    {
        "ac_no": 10,
        "zone": "Zone 1",
        "district_no": 3,
        "district_name": "Parvathipuram Manyam",
        "ac_name": "Palakonda",
        "dsp_name": "G.V Krishna Rao",
        "mobile_no": "6309990806",
        "district_id": "parvathipuram_manyam",
        "constituency_id": "palakonda"
    },
    {
        "ac_no": 11,
        "zone": "Zone 1",
        "district_no": 3,
        "district_name": "Parvathipuram Manyam",
        "ac_name": "Kurupam",
        "dsp_name": "Krishna Rao",
        "mobile_no": "6309990806",
        "district_id": "parvathipuram_manyam",
        "constituency_id": "kurupam"
    },
    {
        "ac_no": 12,
        "zone": "Zone 1",
        "district_no": 3,
        "district_name": "Parvathipuram Manyam",
        "ac_name": "Parvathipuram",
        "dsp_name": "Sunil Charan",
        "mobile_no": "9121109405",
        "district_id": "parvathipuram_manyam",
        "constituency_id": "parvathipuram"
    },
    {
        "ac_no": 13,
        "zone": "Zone 1",
        "district_no": 3,
        "district_name": "Parvathipuram Manyam",
        "ac_name": "Salur",
        "dsp_name": "O.Deelep Kiran",
        "mobile_no": "8977945614",
        "district_id": "parvathipuram_manyam",
        "constituency_id": "salur"
    },
    {
        "ac_no": 14,
        "zone": "Zone 1",
        "district_no": 2,
        "district_name": "Vizianagaram",
        "ac_name": "Bobbili",
        "dsp_name": "Sridhar",
        "mobile_no": "9121109404",
        "district_id": "vizianagaram",
        "constituency_id": "bobbili"
    },
    {
        "ac_no": 15,
        "zone": "Zone 1",
        "district_no": 2,
        "district_name": "Vizianagaram",
        "ac_name": "Cheepurupalli",
        "dsp_name": "Kalyan Chakravathi",
        "mobile_no": "9701287990",
        "district_id": "vizianagaram",
        "constituency_id": "cheepurupalli"
    },
    {
        "ac_no": 16,
        "zone": "Zone 1",
        "district_no": 2,
        "district_name": "Vizianagaram",
        "ac_name": "Gajapathinagaram",
        "dsp_name": "Sridar Reddy",
        "mobile_no": "9121109459",
        "district_id": "vizianagaram",
        "constituency_id": "gajapathinagaram"
    },
    {
        "ac_no": 17,
        "zone": "Zone 1",
        "district_no": 2,
        "district_name": "Vizianagaram",
        "ac_name": "Nellimarla",
        "dsp_name": "G.Govinda Rao",
        "mobile_no": "9121109403",
        "district_id": "vizianagaram",
        "constituency_id": "nellimarla"
    },
    {
        "ac_no": 18,
        "zone": "Zone 1",
        "district_no": 2,
        "district_name": "Vizianagaram",
        "ac_name": "Vizianagaram",
        "dsp_name": "Govinda Rao",
        "mobile_no": "9121109403",
        "district_id": "vizianagaram",
        "constituency_id": "vizianagaram"
    },
    {
        "ac_no": 19,
        "zone": "Zone 1",
        "district_no": 2,
        "district_name": "Vizianagaram",
        "ac_name": "Srungavarapukota",
        "dsp_name": "M. Deepika Patil",
        "mobile_no": "8922276163",
        "district_id": "vizianagaram",
        "constituency_id": "srungavarapukota"
    },
    {
        "ac_no": 20,
        "zone": "Zone 1",
        "district_no": 5,
        "district_name": "Visakhapatnam",
        "ac_name": "Bhimili",
        "dsp_name": "K. Anand Reddy",
        "mobile_no": "9491063502",
        "district_id": "visakhapatnam",
        "constituency_id": "bhimili"
    },
    {
        "ac_no": 21,
        "zone": "Zone 1",
        "district_no": 5,
        "district_name": "Visakhapatnam",
        "ac_name": "Visakhapatnam East",
        "dsp_name": "K. Srinivas Rao",
        "mobile_no": "9440904348",
        "district_id": "visakhapatnam",
        "constituency_id": "visakhapatnam_east"
    },
    {
        "ac_no": 22,
        "zone": "Zone 1",
        "district_no": 5,
        "district_name": "Visakhapatnam",
        "ac_name": "Visakhapatnam South",
        "dsp_name": "K. Srinivas Rao",
        "mobile_no": "9440904348",
        "district_id": "visakhapatnam",
        "constituency_id": "visakhapatnam_south"
    },
    {
        "ac_no": 23,
        "zone": "Zone 1",
        "district_no": 5,
        "district_name": "Visakhapatnam",
        "ac_name": "Visakhapatnam North",
        "dsp_name": "K. Srinivas Rao",
        "mobile_no": "9440904348",
        "district_id": "visakhapatnam",
        "constituency_id": "visakhapatnam_north"
    },
    {
        "ac_no": 24,
        "zone": "Zone 1",
        "district_no": 5,
        "district_name": "Visakhapatnam",
        "ac_name": "Visakhapatnam West",
        "dsp_name": "K. Anand Reddy",
        "mobile_no": "9491063502",
        "district_id": "visakhapatnam",
        "constituency_id": "visakhapatnam_west"
    },
    {
        "ac_no": 25,
        "zone": "Zone 1",
        "district_no": 5,
        "district_name": "Visakhapatnam",
        "ac_name": "Gajuwaka",
        "dsp_name": "K. Anand Reddy",
        "mobile_no": "9491063502",
        "district_id": "visakhapatnam",
        "constituency_id": "gajuwaka"
    },
    {
        "ac_no": 26,
        "zone": "Zone 1",
        "district_no": 6,
        "district_name": "Anakapalli",
        "ac_name": "Chodavaram",
        "dsp_name": "Adhi Raj Sing Rana",
        "mobile_no": "9440796070",
        "district_id": "anakapalli",
        "constituency_id": "chodavaram"
    },
    {
        "ac_no": 27,
        "zone": "Zone 1",
        "district_no": 6,
        "district_name": "Anakapalli",
        "ac_name": "Madugula",
        "dsp_name": "Subbaraju Garu",
        "mobile_no": "9440796069",
        "district_id": "anakapalli",
        "constituency_id": "madugula"
    },
    {
        "ac_no": 28,
        "zone": "Zone 1",
        "district_no": 4,
        "district_name": "Alluri Sitharama Raju",
        "ac_name": "Araku Valley",
        "dsp_name": "Diraj .K(Asp)",
        "mobile_no": "9440904232",
        "district_id": "alluri_sitharama_raju",
        "constituency_id": "araku_valley"
    },
    {
        "ac_no": 29,
        "zone": "Zone 1",
        "district_no": 4,
        "district_name": "Alluri Sitharama Raju",
        "ac_name": "Paderu",
        "dsp_name": "Diraj .K(Asp)",
        "mobile_no": "9440904232",
        "district_id": "alluri_sitharama_raju",
        "constituency_id": "paderu"
    },
    {
        "ac_no": 30,
        "zone": "Zone 1",
        "district_no": 6,
        "district_name": "Anakapalli",
        "ac_name": "Anakapalle",
        "dsp_name": "Subbaraju Garu",
        "mobile_no": "9440796069",
        "district_id": "anakapalli",
        "constituency_id": "anakapalle"
    },
    {
        "ac_no": 31,
        "zone": "Zone 1",
        "district_no": 5,
        "district_name": "Anakapalli",
        "ac_name": "Pendurthi",
        "dsp_name": "K.V.Satyanarayana",
        "mobile_no": "9440796084",
        "district_id": "anakapalli",
        "constituency_id": "pendurthi"
    },
    {
        "ac_no": 32,
        "zone": "Zone 1",
        "district_no": 6,
        "district_name": "Anakapalli",
        "ac_name": "Elamanchili",
        "dsp_name": "K.V.Satyanarayana",
        "mobile_no": "9440796084",
        "district_id": "anakapalli",
        "constituency_id": "elamanchili"
    },
    {
        "ac_no": 33,
        "zone": "Zone 1",
        "district_no": 6,
        "district_name": "Anakapalli",
        "ac_name": "Payakaraopet",
        "dsp_name": "Adhi Raj Sing Rana",
        "mobile_no": "9440796070",
        "district_id": "anakapalli",
        "constituency_id": "payakaraopet"
    },
    {
        "ac_no": 34,
        "zone": "Zone 1",
        "district_no": 6,
        "district_name": "Anakapalli",
        "ac_name": "Narsipatnam",
        "dsp_name": "Adhi Raj Sing Rana",
        "mobile_no": "9440796070",
        "district_id": "anakapalli",
        "constituency_id": "narsipatnam"
    },
    {
        "ac_no": 35,
        "zone": "Zone 2",
        "district_no": 7,
        "district_name": "Kakinada",
        "ac_name": "Tuni",
        "dsp_name": "K.Latha Kumari",
        "mobile_no": "9440796508",
        "district_id": "kakinada",
        "constituency_id": "tuni"
    },
    {
        "ac_no": 36,
        "zone": "Zone 2",
        "district_no": 7,
        "district_name": "Kakinada",
        "ac_name": "Prathipadu",
        "dsp_name": "K.Latha Kumari",
        "mobile_no": "9440796508",
        "district_id": "kakinada",
        "constituency_id": "kakinada_prathipadu"
    },
    {
        "ac_no": 37,
        "zone": "Zone 2",
        "district_no": 7,
        "district_name": "Kakinada",
        "ac_name": "Pithapuram",
        "dsp_name": "Murali Krishna Reddy",
        "mobile_no": "9440796505",
        "district_id": "kakinada",
        "constituency_id": "pithapuram"
    },
    {
        "ac_no": 38,
        "zone": "Zone 2",
        "district_no": 7,
        "district_name": "Kakinada",
        "ac_name": "Kakinada Rural",
        "dsp_name": "Murali Krishna Reddy",
        "mobile_no": "9440796505",
        "district_id": "kakinada",
        "constituency_id": "kakinada_rural"
    },
    {
        "ac_no": 39,
        "zone": "Zone 2",
        "district_no": 7,
        "district_name": "Kakinada",
        "ac_name": "Peddapuram",
        "dsp_name": "K.Latha Kumari",
        "mobile_no": "9440796508",
        "district_id": "kakinada",
        "constituency_id": "peddapuram"
    },
    {
        "ac_no": 40,
        "zone": "Zone 2",
        "district_no": 9,
        "district_name": "East Godavari",
        "ac_name": "Anaparthy",
        "dsp_name": "M. Kishore Kumar",
        "mobile_no": "9440796506",
        "district_id": "east_godavari",
        "constituency_id": "anaparthy"
    },
    {
        "ac_no": 41,
        "zone": "Zone 2",
        "district_no": 7,
        "district_name": "Kakinada",
        "ac_name": "Kakinada City",
        "dsp_name": "Murali Krishna Reddy",
        "mobile_no": "9440796505",
        "district_id": "kakinada",
        "constituency_id": "kakinada_city"
    },
    {
        "ac_no": 42,
        "zone": "Zone 2",
        "district_no": 8,
        "district_name": "Dr. B.R. Ambedkar Konaseema",
        "ac_name": "Ramachandrapuram",
        "dsp_name": "Dsprao",
        "mobile_no": "9440796507",
        "district_id": "dr_b_r_ambedkar_konaseema",
        "constituency_id": "ramachandrapuram"
    },
    {
        "ac_no": 43,
        "zone": "Zone 2",
        "district_no": 8,
        "district_name": "Dr. B.R. Ambedkar Konaseema",
        "ac_name": "Mummidivaram",
        "dsp_name": "Ambicaprasad",
        "mobile_no": "9440796504",
        "district_id": "dr_b_r_ambedkar_konaseema",
        "constituency_id": "mummidivaram"
    },
    {
        "ac_no": 44,
        "zone": "Zone 2",
        "district_no": 8,
        "district_name": "Dr. B.R. Ambedkar Konaseema",
        "ac_name": "Amalapuram",
        "dsp_name": "Ambicaprasad",
        "mobile_no": "9440796504",
        "district_id": "dr_b_r_ambedkar_konaseema",
        "constituency_id": "amalapuram"
    },
    {
        "ac_no": 45,
        "zone": "Zone 2",
        "district_no": 8,
        "district_name": "Dr. B.R. Ambedkar Konaseema",
        "ac_name": "Razole",
        "dsp_name": "Ramana",
        "mobile_no": "8712692109",
        "district_id": "dr_b_r_ambedkar_konaseema",
        "constituency_id": "razole"
    },
    {
        "ac_no": 46,
        "zone": "Zone 2",
        "district_no": 8,
        "district_name": "Dr. B.R. Ambedkar Konaseema",
        "ac_name": "Gannavaram",
        "dsp_name": "Ramana",
        "mobile_no": "8712692109",
        "district_id": "dr_b_r_ambedkar_konaseema",
        "constituency_id": "konaseema_gannavaram"
    },
    {
        "ac_no": 47,
        "zone": "Zone 2",
        "district_no": 8,
        "district_name": "Dr. B.R. Ambedkar Konaseema",
        "ac_name": "Kothapeta",
        "dsp_name": "Ramana",
        "mobile_no": "8712692109",
        "district_id": "dr_b_r_ambedkar_konaseema",
        "constituency_id": "kothapeta"
    },
    {
        "ac_no": 48,
        "zone": "Zone 2",
        "district_no": 8,
        "district_name": "Dr. B.R. Ambedkar Konaseema",
        "ac_name": "Mandapeta",
        "dsp_name": "Dsprao",
        "mobile_no": "9440796507",
        "district_id": "dr_b_r_ambedkar_konaseema",
        "constituency_id": "mandapeta"
    },
    {
        "ac_no": 49,
        "zone": "Zone 2",
        "district_no": 9,
        "district_name": "East Godavari",
        "ac_name": "Rajanagaram",
        "dsp_name": "G.Uma Maheswarao",
        "mobile_no": "9440904829",
        "district_id": "east_godavari",
        "constituency_id": "rajanagaram"
    },
    {
        "ac_no": 50,
        "zone": "Zone 2",
        "district_no": 9,
        "district_name": "East Godavari",
        "ac_name": "Rajahmundry City",
        "dsp_name": "K.Vijay Paul",
        "mobile_no": "9490760792",
        "district_id": "east_godavari",
        "constituency_id": "rajahmundry_city"
    },
    {
        "ac_no": 51,
        "zone": "Zone 2",
        "district_no": 9,
        "district_name": "East Godavari",
        "ac_name": "Rajahmundry Rural",
        "dsp_name": "Srilatha",
        "mobile_no": "9490760791",
        "district_id": "east_godavari",
        "constituency_id": "rajahmundry_rural"
    },
    {
        "ac_no": 52,
        "zone": "Zone 2",
        "district_no": 7,
        "district_name": "Kakinada",
        "ac_name": "Jaggampeta",
        "dsp_name": "K.Latha Kumari",
        "mobile_no": "9440796508",
        "district_id": "kakinada",
        "constituency_id": "jaggampeta"
    },
    {
        "ac_no": 53,
        "zone": "Zone 1",
        "district_no": 4,
        "district_name": "Alluri Sitharama Raju",
        "ac_name": "Rampachodavaram",
        "dsp_name": "Jagadesh",
        "mobile_no": "9440796517",
        "district_id": "alluri_sitharama_raju",
        "constituency_id": "rampachodavaram"
    },
    {
        "ac_no": 54,
        "zone": "Zone 2",
        "district_no": 9,
        "district_name": "East Godavari",
        "ac_name": "Kovvur",
        "dsp_name": "Varma",
        "mobile_no": "9440796620",
        "district_id": "east_godavari",
        "constituency_id": "kovvur"
    },
    {
        "ac_no": 55,
        "zone": "Zone 2",
        "district_no": 9,
        "district_name": "East Godavari",
        "ac_name": "Nidadavole",
        "dsp_name": "Varma",
        "mobile_no": "9440796620",
        "district_id": "east_godavari",
        "constituency_id": "nidadavole"
    },
    {
        "ac_no": 56,
        "zone": "Zone 2",
        "district_no": 10,
        "district_name": "West Godavari",
        "ac_name": "Achanta",
        "dsp_name": "Veeranjaneya Reddy",
        "mobile_no": "9440796615",
        "district_id": "west_godavari",
        "constituency_id": "achanta"
    },
    {
        "ac_no": 57,
        "zone": "Zone 2",
        "district_no": 10,
        "district_name": "West Godavari",
        "ac_name": "Palakollu",
        "dsp_name": "Veeranjaneya Reddy",
        "mobile_no": "9440796615",
        "district_id": "west_godavari",
        "constituency_id": "palakollu"
    },
    {
        "ac_no": 58,
        "zone": "Zone 2",
        "district_no": 10,
        "district_name": "West Godavari",
        "ac_name": "Narasapuram",
        "dsp_name": "Veeranjaneya Reddy",
        "mobile_no": "9440796615",
        "district_id": "west_godavari",
        "constituency_id": "narasapuram"
    },
    {
        "ac_no": 59,
        "zone": "Zone 2",
        "district_no": 10,
        "district_name": "West Godavari",
        "ac_name": "Bhimavaram",
        "dsp_name": "B.Thirunath",
        "mobile_no": "9154966497",
        "district_id": "west_godavari",
        "constituency_id": "bhimavaram"
    },
    {
        "ac_no": 60,
        "zone": "Zone 2",
        "district_no": 10,
        "district_name": "West Godavari",
        "ac_name": "Undi",
        "dsp_name": "B.Thirunath",
        "mobile_no": "9154966497",
        "district_id": "west_godavari",
        "constituency_id": "undi"
    },
    {
        "ac_no": 61,
        "zone": "Zone 2",
        "district_no": 10,
        "district_name": "West Godavari",
        "ac_name": "Tanuku",
        "dsp_name": "Srinuvasu",
        "mobile_no": "9985969372",
        "district_id": "west_godavari",
        "constituency_id": "tanuku"
    },
    {
        "ac_no": 62,
        "zone": "Zone 2",
        "district_no": 10,
        "district_name": "West Godavari",
        "ac_name": "Tadepalligudem",
        "dsp_name": "Srinuvasu",
        "mobile_no": "9985969372",
        "district_id": "west_godavari",
        "constituency_id": "tadepalligudem"
    },
    {
        "ac_no": 63,
        "zone": "Zone 2",
        "district_no": 11,
        "district_name": "Eluru",
        "ac_name": "Unguturu",
        "dsp_name": "E. Srinivasa Rao",
        "mobile_no": "9440796603",
        "district_id": "eluru",
        "constituency_id": "unguturu"
    },
    {
        "ac_no": 64,
        "zone": "Zone 2",
        "district_no": 11,
        "district_name": "Eluru",
        "ac_name": "Denduluru",
        "dsp_name": "E.Venkateswarlu",
        "mobile_no": "9440796603",
        "district_id": "eluru",
        "constituency_id": "denduluru"
    },
    {
        "ac_no": 65,
        "zone": "Zone 2",
        "district_no": 11,
        "district_name": "Eluru",
        "ac_name": "Eluru",
        "dsp_name": "Srinivas",
        "mobile_no": "9440796603",
        "district_id": "eluru",
        "constituency_id": "eluru"
    },
    {
        "ac_no": 66,
        "zone": "Zone 2",
        "district_no": 9,
        "district_name": "East Godavari",
        "ac_name": "Gopalapuram",
        "dsp_name": "Varma",
        "mobile_no": "9440796620",
        "district_id": "east_godavari",
        "constituency_id": "gopalapuram"
    },
    {
        "ac_no": 67,
        "zone": "Zone 2",
        "district_no": 11,
        "district_name": "Eluru",
        "ac_name": "Polavaram",
        "dsp_name": "B. Srinivas",
        "mobile_no": "7382623680",
        "district_id": "eluru",
        "constituency_id": "polavaram"
    },
    {
        "ac_no": 68,
        "zone": "Zone 2",
        "district_no": 11,
        "district_name": "Eluru",
        "ac_name": "Chintalapudi",
        "dsp_name": "Dhanunjaya Rao",
        "mobile_no": "9440796626",
        "district_id": "eluru",
        "constituency_id": "chintalapudi"
    },
    {
        "ac_no": 69,
        "zone": "Zone 3",
        "district_no": 13,
        "district_name": "NTR",
        "ac_name": "Tiruvuru",
        "dsp_name": "Maragani Ramesh",
        "mobile_no": "9440906871",
        "district_id": "ntr",
        "constituency_id": "tiruvuru"
    },
    {
        "ac_no": 70,
        "zone": "Zone 2",
        "district_no": 11,
        "district_name": "Eluru",
        "ac_name": "Nuzvid",
        "dsp_name": "Ashok Kumr Gowd",
        "mobile_no": "9440796408",
        "district_id": "eluru",
        "constituency_id": "nuzvid"
    },
    {
        "ac_no": 71,
        "zone": "Zone 3",
        "district_no": 12,
        "district_name": "Krishna",
        "ac_name": "Gannavaram",
        "dsp_name": "Jai Surya",
        "mobile_no": "9440627051",
        "district_id": "krishna",
        "constituency_id": "krishna_gannavaram"
    },
    {
        "ac_no": 72,
        "zone": "Zone 3",
        "district_no": 12,
        "district_name": "Krishna",
        "ac_name": "Gudivada",
        "dsp_name": "Srikanth",
        "mobile_no": "9440796407",
        "district_id": "krishna",
        "constituency_id": "gudivada"
    },
    {
        "ac_no": 73,
        "zone": "Zone 2",
        "district_no": 11,
        "district_name": "Eluru",
        "ac_name": "Kaikalur",
        "dsp_name": "Srinivasulu",
        "mobile_no": "9440404030",
        "district_id": "eluru",
        "constituency_id": "kaikalur"
    },
    {
        "ac_no": 74,
        "zone": "Zone 3",
        "district_no": 12,
        "district_name": "Krishna",
        "ac_name": "Pedana",
        "dsp_name": "Madhava Reddy",
        "mobile_no": "9440796405",
        "district_id": "krishna",
        "constituency_id": "pedana"
    },
    {
        "ac_no": 75,
        "zone": "Zone 3",
        "district_no": 12,
        "district_name": "Krishna",
        "ac_name": "Machilipatnam",
        "dsp_name": "Madhava Reddy",
        "mobile_no": "9440796405",
        "district_id": "krishna",
        "constituency_id": "machilipatnam"
    },
    {
        "ac_no": 76,
        "zone": "Zone 3",
        "district_no": 12,
        "district_name": "Krishna",
        "ac_name": "Avanigadda",
        "dsp_name": "P. Muralidhar",
        "mobile_no": "9440796406",
        "district_id": "krishna",
        "constituency_id": "avanigadda"
    },
    {
        "ac_no": 77,
        "zone": "Zone 3",
        "district_no": 12,
        "district_name": "Krishna",
        "ac_name": "Pamarru",
        "dsp_name": "Srikanth",
        "mobile_no": "9440796407",
        "district_id": "krishna",
        "constituency_id": "pamarru"
    },
    {
        "ac_no": 78,
        "zone": "Zone 3",
        "district_no": 12,
        "district_name": "Krishna",
        "ac_name": "Penamaluru",
        "dsp_name": "Jaya Surya",
        "mobile_no": "9440627051",
        "district_id": "krishna",
        "constituency_id": "penamaluru"
    },
    {
        "ac_no": 79,
        "zone": "Zone 3",
        "district_no": 13,
        "district_name": "NTR",
        "ac_name": "Vijayawada West",
        "dsp_name": "Acp. Hanumath Rao",
        "mobile_no": "9440627090",
        "district_id": "ntr",
        "constituency_id": "vijayawada_west"
    },
    {
        "ac_no": 80,
        "zone": "Zone 3",
        "district_no": 13,
        "district_name": "NTR",
        "ac_name": "Vijayawada Central",
        "dsp_name": "Dcp Ramana Murthy",
        "mobile_no": "9440627089",
        "district_id": "ntr",
        "constituency_id": "vijayawada_central"
    },
    {
        "ac_no": 81,
        "zone": "Zone 3",
        "district_no": 13,
        "district_name": "NTR",
        "ac_name": "Vijayawada East",
        "dsp_name": "P Bhaskar Rao",
        "mobile_no": "9440627035",
        "district_id": "ntr",
        "constituency_id": "vijayawada_east"
    },
    {
        "ac_no": 82,
        "zone": "Zone 3",
        "district_no": 13,
        "district_name": "NTR",
        "ac_name": "Mylavaram",
        "dsp_name": "Ramesh",
        "mobile_no": "94409 06871",
        "district_id": "ntr",
        "constituency_id": "mylavaram"
    },
    {
        "ac_no": 83,
        "zone": "Zone 3",
        "district_no": 13,
        "district_name": "NTR",
        "ac_name": "Nandigama",
        "dsp_name": "Janardha Naidu",
        "mobile_no": "9440796409",
        "district_id": "ntr",
        "constituency_id": "nandigama"
    },
    {
        "ac_no": 84,
        "zone": "Zone 3",
        "district_no": 13,
        "district_name": "NTR",
        "ac_name": "Jaggayyapeta",
        "dsp_name": "Janardha Naidu",
        "mobile_no": "94407 96409",
        "district_id": "ntr",
        "constituency_id": "jaggayyapeta"
    },
    {
        "ac_no": 85,
        "zone": "Zone 3",
        "district_no": 16,
        "district_name": "Palnadu",
        "ac_name": "Pedakurapadu",
        "dsp_name": "B Aadinarayana",
        "mobile_no": "9440796208",
        "district_id": "palnadu",
        "constituency_id": "pedakurapadu"
    },
    {
        "ac_no": 86,
        "zone": "Zone 3",
        "district_no": 14,
        "district_name": "Guntur",
        "ac_name": "Tadikonda",
        "dsp_name": "Pothuraju",
        "mobile_no": "9550688555",
        "district_id": "guntur",
        "constituency_id": "tadikonda"
    },
    {
        "ac_no": 87,
        "zone": "Zone 3",
        "district_no": 14,
        "district_name": "Guntur",
        "ac_name": "Mangalagiri",
        "dsp_name": "Rambabu",
        "mobile_no": "8688831349",
        "district_id": "guntur",
        "constituency_id": "mangalagiri"
    },
    {
        "ac_no": 88,
        "zone": "Zone 3",
        "district_no": 14,
        "district_name": "Guntur",
        "ac_name": "Ponnuru",
        "dsp_name": "Janardhan Rao",
        "mobile_no": "9440796206",
        "district_id": "guntur",
        "constituency_id": "ponnuru"
    },
    {
        "ac_no": 89,
        "zone": "Zone 3",
        "district_no": 15,
        "district_name": "Bapatla",
        "ac_name": "Vemuru",
        "dsp_name": "Murali Krishna",
        "mobile_no": "8333813225",
        "district_id": "bapatla",
        "constituency_id": "vemuru"
    },
    {
        "ac_no": 90,
        "zone": "Zone 3",
        "district_no": 15,
        "district_name": "Bapatla",
        "ac_name": "Repalle",
        "dsp_name": "Murali Krishna",
        "mobile_no": "8333813225",
        "district_id": "bapatla",
        "constituency_id": "repalle"
    },
    {
        "ac_no": 91,
        "zone": "Zone 3",
        "district_no": 14,
        "district_name": "Guntur",
        "ac_name": "Tenali",
        "dsp_name": "Janardhan Rao",
        "mobile_no": "9440796206",
        "district_id": "guntur",
        "constituency_id": "tenali"
    },
    {
        "ac_no": 92,
        "zone": "Zone 3",
        "district_no": 15,
        "district_name": "Bapatla",
        "ac_name": "Bapatla",
        "dsp_name": "T Venkateswarulu",
        "mobile_no": "9440796165",
        "district_id": "bapatla",
        "constituency_id": "bapatla"
    },
    {
        "ac_no": 93,
        "zone": "Zone 3",
        "district_no": 14,
        "district_name": "Guntur",
        "ac_name": "Prathipadu",
        "dsp_name": "Mahboob Basha",
        "mobile_no": "8688831375",
        "district_id": "guntur",
        "constituency_id": "guntur_prathipadu"
    },
    {
        "ac_no": 94,
        "zone": "Zone 3",
        "district_no": 14,
        "district_name": "Guntur",
        "ac_name": "Guntur West",
        "dsp_name": "Umamaheswareddy",
        "mobile_no": "8688831330",
        "district_id": "guntur",
        "constituency_id": "guntur_west"
    },
    {
        "ac_no": 95,
        "zone": "Zone 3",
        "district_no": 14,
        "district_name": "Guntur",
        "ac_name": "Guntur East",
        "dsp_name": "Nachiketh Shalke",
        "mobile_no": "8688831309",
        "district_id": "guntur",
        "constituency_id": "guntur_east"
    },
    {
        "ac_no": 96,
        "zone": "Zone 3",
        "district_no": 16,
        "district_name": "Palnadu",
        "ac_name": "Chilakaluripet",
        "dsp_name": "Mahesh",
        "mobile_no": "9440796209",
        "district_id": "palnadu",
        "constituency_id": "chilakaluripet"
    },
    {
        "ac_no": 97,
        "zone": "Zone 3",
        "district_no": 16,
        "district_name": "Palnadu",
        "ac_name": "Narasaraopet",
        "dsp_name": "Mahesh",
        "mobile_no": "9440796209",
        "district_id": "palnadu",
        "constituency_id": "narasaraopet"
    },
    {
        "ac_no": 98,
        "zone": "Zone 3",
        "district_no": 16,
        "district_name": "Palnadu",
        "ac_name": "Sattenapalle",
        "dsp_name": "B Aadinarayana",
        "mobile_no": "9440796208",
        "district_id": "palnadu",
        "constituency_id": "sattenapalle"
    },
    {
        "ac_no": 99,
        "zone": "Zone 3",
        "district_no": 16,
        "district_name": "Palnadu",
        "ac_name": "Vinukonda",
        "dsp_name": "Mahesh",
        "mobile_no": "9440796209",
        "district_id": "palnadu",
        "constituency_id": "vinukonda"
    },
    {
        "ac_no": 100,
        "zone": "Zone 3",
        "district_no": 16,
        "district_name": "Palnadu",
        "ac_name": "Gurajala",
        "dsp_name": "Pallapu. Raju",
        "mobile_no": "9440796210",
        "district_id": "palnadu",
        "constituency_id": "gurajala"
    },
    {
        "ac_no": 101,
        "zone": "Zone 3",
        "district_no": 16,
        "district_name": "Palnadu",
        "ac_name": "Macherla",
        "dsp_name": "Pallapu. Raju",
        "mobile_no": "9440796210",
        "district_id": "palnadu",
        "constituency_id": "macherla"
    },
    {
        "ac_no": 102,
        "zone": "Zone 4",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Yerragondapalem",
        "dsp_name": null,
        "mobile_no": "8407253278",
        "district_id": "prakasam",
        "constituency_id": "yerragondapalem"
    },
    {
        "ac_no": 103,
        "zone": "Zone 4",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Darsi",
        "dsp_name": "Ashok Vardhan Reddy",
        "mobile_no": "9121102160",
        "district_id": "prakasam",
        "constituency_id": "darsi"
    },
    {
        "ac_no": 104,
        "zone": "Zone 3",
        "district_no": 15,
        "district_name": "Bapatla",
        "ac_name": "Parchur",
        "dsp_name": "T Venkateswarlu Dsp",
        "mobile_no": "9440796165",
        "district_id": "bapatla",
        "constituency_id": "parchur"
    },
    {
        "ac_no": 105,
        "zone": "Zone 3",
        "district_no": 15,
        "district_name": "Bapatla",
        "ac_name": "Addanki",
        "dsp_name": "S Prasad Rao",
        "mobile_no": "9121102140",
        "district_id": "bapatla",
        "constituency_id": "addanki"
    },
    {
        "ac_no": 106,
        "zone": "Zone 3",
        "district_no": 15,
        "district_name": "Bapatla",
        "ac_name": "Chirala",
        "dsp_name": "S Prasad Rao",
        "mobile_no": "9121102140",
        "district_id": "bapatla",
        "constituency_id": "chirala"
    },
    {
        "ac_no": 107,
        "zone": "Zone 3",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Santhanuthalapadu",
        "dsp_name": "Narayana Swami Reddy",
        "mobile_no": "9121102117",
        "district_id": "prakasam",
        "constituency_id": "santhanuthalapadu"
    },
    {
        "ac_no": 108,
        "zone": "Zone 4",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Ongole",
        "dsp_name": "Narayana Swami Reddy",
        "mobile_no": "9121102117",
        "district_id": "prakasam",
        "constituency_id": "ongole"
    },
    {
        "ac_no": 109,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Kandukur",
        "dsp_name": "K Srinivasulu ( Kandhe )",
        "mobile_no": "9121102201",
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "kandukur"
    },
    {
        "ac_no": 110,
        "zone": "Zone 4",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Kondapi",
        "dsp_name": "Vera Raghava Reddy",
        "mobile_no": "8596222200",
        "district_id": "prakasam",
        "constituency_id": "kondapi"
    },
    {
        "ac_no": 111,
        "zone": "Zone 4",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Markapuram",
        "dsp_name": "Vera Raghava Reddy",
        "mobile_no": "8596222200",
        "district_id": "prakasam",
        "constituency_id": "markapuram"
    },
    {
        "ac_no": 112,
        "zone": "Zone 4",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Giddalur",
        "dsp_name": "Sk. Shahabadh ( Trainee Dsp )",
        "mobile_no": null,
        "district_id": "prakasam",
        "constituency_id": "giddalur"
    },
    {
        "ac_no": 113,
        "zone": "Zone 4",
        "district_no": 17,
        "district_name": "Prakasam",
        "ac_name": "Kanigiri",
        "dsp_name": "Ramaraju",
        "mobile_no": "91211 02264",
        "district_id": "prakasam",
        "constituency_id": "kanigiri"
    },
    {
        "ac_no": 114,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Kavali",
        "dsp_name": "M.V.Ramana",
        "mobile_no": "9440796333",
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "kavali"
    },
    {
        "ac_no": 115,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Atmakur",
        "dsp_name": "Kota Reddy",
        "mobile_no": "9440796389",
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "atmakur"
    },
    {
        "ac_no": 116,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Kovuru",
        "dsp_name": "Veranjineya Reddy",
        "mobile_no": null,
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "kovuru"
    },
    {
        "ac_no": 117,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Nellore City",
        "dsp_name": "Srinivasulu Reddy",
        "mobile_no": "9440796317",
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "nellore_city"
    },
    {
        "ac_no": 118,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Nellore Rural",
        "dsp_name": "D.Srinivas Rao",
        "mobile_no": "94407 96303",
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "nellore_rural"
    },
    {
        "ac_no": 119,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Sarvepalli",
        "dsp_name": "Srinuvasulu Reddy",
        "mobile_no": "9440796317",
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "sarvepalli"
    },
    {
        "ac_no": 120,
        "zone": "Zone 4",
        "district_no": 26,
        "district_name": "Tirupati",
        "ac_name": "Gudur",
        "dsp_name": "Surya Narayana Reddy",
        "mobile_no": "9440796340",
        "district_id": "tirupati",
        "constituency_id": "gudur"
    },
    {
        "ac_no": 121,
        "zone": "Zone 4",
        "district_no": 26,
        "district_name": "Tirupati",
        "ac_name": "Sullurpeta",
        "dsp_name": "Rajagopal Reddy",
        "mobile_no": "9491086024",
        "district_id": "tirupati",
        "constituency_id": "sullurpeta"
    },
    {
        "ac_no": 122,
        "zone": "Zone 4",
        "district_no": 26,
        "district_name": "Tirupati",
        "ac_name": "Venkatagiri",
        "dsp_name": "Surya Narayana Reddy",
        "mobile_no": "9440796340",
        "district_id": "tirupati",
        "constituency_id": "venkatagiri"
    },
    {
        "ac_no": 123,
        "zone": "Zone 4",
        "district_no": 18,
        "district_name": "Sri Potti Sriramulu Nellore",
        "ac_name": "Udayagiri",
        "dsp_name": "M.V.Ramana",
        "mobile_no": "9440796333",
        "district_id": "sri_potti_sriramulu_nellore",
        "constituency_id": "udayagiri"
    },
    {
        "ac_no": 124,
        "zone": "Zone 5",
        "district_no": 23,
        "district_name": "YSR Kadapa",
        "ac_name": "Badvel",
        "dsp_name": "Vamshidhar Gaud",
        "mobile_no": "9121100616",
        "district_id": "ysr_kadapa",
        "constituency_id": "badvel"
    },
    {
        "ac_no": 125,
        "zone": "Zone 4",
        "district_no": 24,
        "district_name": "Annamayya",
        "ac_name": "Rajampet",
        "dsp_name": "Chaitanya",
        "mobile_no": null,
        "district_id": "annamayya",
        "constituency_id": "rajampet"
    },
    {
        "ac_no": 126,
        "zone": "Zone 5",
        "district_no": 23,
        "district_name": "YSR Kadapa",
        "ac_name": "Kadapa",
        "dsp_name": "Sharif Basha",
        "mobile_no": "9121100515",
        "district_id": "ysr_kadapa",
        "constituency_id": "kadapa"
    },
    {
        "ac_no": 127,
        "zone": "Zone 4",
        "district_no": 24,
        "district_name": "Annamayya",
        "ac_name": "Kodur",
        "dsp_name": "Chaitanya",
        "mobile_no": null,
        "district_id": "annamayya",
        "constituency_id": "kodur"
    },
    {
        "ac_no": 128,
        "zone": "Zone 4",
        "district_no": 24,
        "district_name": "Annamayya",
        "ac_name": "Rayachoti",
        "dsp_name": "Sayed Mahaboob Basha",
        "mobile_no": "9121100715",
        "district_id": "annamayya",
        "constituency_id": "rayachoti"
    },
    {
        "ac_no": 129,
        "zone": "Zone 5",
        "district_no": 23,
        "district_name": "YSR Kadapa",
        "ac_name": "Pulivendla",
        "dsp_name": "Vinod Reddy",
        "mobile_no": "91211 00545",
        "district_id": "ysr_kadapa",
        "constituency_id": "pulivendla"
    },
    {
        "ac_no": 130,
        "zone": "Zone 5",
        "district_no": 23,
        "district_name": "YSR Kadapa",
        "ac_name": "Kamalapuram",
        "dsp_name": "Sharif Basha",
        "mobile_no": "9121100515",
        "district_id": "ysr_kadapa",
        "constituency_id": "kamalapuram"
    },
    {
        "ac_no": 131,
        "zone": "Zone 5",
        "district_no": 23,
        "district_name": "YSR Kadapa",
        "ac_name": "Jammalamadugu",
        "dsp_name": null,
        "mobile_no": null,
        "district_id": "ysr_kadapa",
        "constituency_id": "jammalamadugu"
    },
    {
        "ac_no": 132,
        "zone": "Zone 5",
        "district_no": 23,
        "district_name": "YSR Kadapa",
        "ac_name": "Proddatur",
        "dsp_name": "Perma Kumar",
        "mobile_no": "9121100585",
        "district_id": "ysr_kadapa",
        "constituency_id": "proddatur"
    },
    {
        "ac_no": 133,
        "zone": "Zone 5",
        "district_no": 23,
        "district_name": "YSR Kadapa",
        "ac_name": "Mydukur",
        "dsp_name": "Vamshidhar Gaud",
        "mobile_no": "9121100616",
        "district_id": "ysr_kadapa",
        "constituency_id": "mydukur"
    },
    {
        "ac_no": 134,
        "zone": "Zone 5",
        "district_no": 20,
        "district_name": "Nandyal",
        "ac_name": "Allagadda",
        "dsp_name": "Venkata Ramaiah",
        "mobile_no": "9121101163",
        "district_id": "nandyal",
        "constituency_id": "allagadda"
    },
    {
        "ac_no": 135,
        "zone": "Zone 5",
        "district_no": 20,
        "district_name": "Nandyal",
        "ac_name": "Srisailam",
        "dsp_name": "Srinivasa Rao",
        "mobile_no": "9121101180",
        "district_id": "nandyal",
        "constituency_id": "srisailam"
    },
    {
        "ac_no": 136,
        "zone": "Zone 5",
        "district_no": 20,
        "district_name": "Nandyal",
        "ac_name": "Nandikotkur",
        "dsp_name": "Srinivasa Rao",
        "mobile_no": "9121101180",
        "district_id": "nandyal",
        "constituency_id": "nandikotkur"
    },
    {
        "ac_no": 137,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Kurnool",
        "ac_name": "Kurnool",
        "dsp_name": "Vijaya Shekar",
        "mobile_no": "9121101058",
        "district_id": "kurnool",
        "constituency_id": "kurnool"
    },
    {
        "ac_no": 138,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Nandyal",
        "ac_name": "Panyam",
        "dsp_name": "Vijay Sekhar, Maheswara Reddy",
        "mobile_no": "9121101085",
        "district_id": "nandyal",
        "constituency_id": "panyam"
    },
    {
        "ac_no": 139,
        "zone": "Zone 5",
        "district_no": 20,
        "district_name": "Nandyal",
        "ac_name": "Nandyal",
        "dsp_name": "Maheswa Reddy",
        "mobile_no": "9121101085",
        "district_id": "nandyal",
        "constituency_id": "nandyal"
    },
    {
        "ac_no": 140,
        "zone": "Zone 5",
        "district_no": 20,
        "district_name": "Nandyal",
        "ac_name": "Banaganapalle",
        "dsp_name": "Srinivasa Reddy, Venkata Ramaiah",
        "mobile_no": "91,211,011,139,121,100,000",
        "district_id": "nandyal",
        "constituency_id": "banaganapalle"
    },
    {
        "ac_no": 141,
        "zone": "Zone 5",
        "district_no": 20,
        "district_name": "Nandyal",
        "ac_name": "Dhone",
        "dsp_name": "Srinivasa Reddy",
        "mobile_no": "9121101113",
        "district_id": "nandyal",
        "constituency_id": "dhone"
    },
    {
        "ac_no": 142,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Kurnool",
        "ac_name": "Pattikonda",
        "dsp_name": "Srinivas Reddy",
        "mobile_no": "9121101195",
        "district_id": "kurnool",
        "constituency_id": "pattikonda"
    },
    {
        "ac_no": 143,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Kurnool",
        "ac_name": "Kodumur",
        "dsp_name": "Vijaya Shekar",
        "mobile_no": "9121101058",
        "district_id": "kurnool",
        "constituency_id": "kodumur"
    },
    {
        "ac_no": 144,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Kurnool",
        "ac_name": "Yemmiganur",
        "dsp_name": "Sitharamaiah",
        "mobile_no": "9121101109",
        "district_id": "kurnool",
        "constituency_id": "yemmiganur"
    },
    {
        "ac_no": 145,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Kurnool",
        "ac_name": "Mantralayam",
        "dsp_name": "Sitharamaiah",
        "mobile_no": "9121101109",
        "district_id": "kurnool",
        "constituency_id": "mantralayam"
    },
    {
        "ac_no": 146,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Kurnool",
        "ac_name": "Adoni",
        "dsp_name": "J. Siva Narayana Sweamy",
        "mobile_no": "9121101134",
        "district_id": "kurnool",
        "constituency_id": "adoni"
    },
    {
        "ac_no": 147,
        "zone": "Zone 5",
        "district_no": 19,
        "district_name": "Kurnool",
        "ac_name": "Alur",
        "dsp_name": "Venod Kumar",
        "mobile_no": "9121101195",
        "district_id": "kurnool",
        "constituency_id": "alur"
    },
    {
        "ac_no": 148,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Rayadurg",
        "dsp_name": "Srinivasulu",
        "mobile_no": "94906 19663",
        "district_id": "ananthapuramu",
        "constituency_id": "rayadurg"
    },
    {
        "ac_no": 149,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Uravakonda",
        "dsp_name": "Narasinghappa",
        "mobile_no": "9440796828",
        "district_id": "ananthapuramu",
        "constituency_id": "uravakonda"
    },
    {
        "ac_no": 150,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Guntakal",
        "dsp_name": "Narasinghappa",
        "mobile_no": "9440796828",
        "district_id": "ananthapuramu",
        "constituency_id": "guntakal"
    },
    {
        "ac_no": 151,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Tadipatri",
        "dsp_name": "Gangayya",
        "mobile_no": "9440796860",
        "district_id": "ananthapuramu",
        "constituency_id": "tadipatri"
    },
    {
        "ac_no": 152,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Singanamala",
        "dsp_name": "Siva Reddy",
        "mobile_no": null,
        "district_id": "ananthapuramu",
        "constituency_id": "singanamala"
    },
    {
        "ac_no": 153,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Anantapur Urban",
        "dsp_name": "Prasad Reddy",
        "mobile_no": "9440796803",
        "district_id": "ananthapuramu",
        "constituency_id": "anantapur_urban"
    },
    {
        "ac_no": 154,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Kalyandurg",
        "dsp_name": "Srinivasulu",
        "mobile_no": "94906 19663",
        "district_id": "ananthapuramu",
        "constituency_id": "kalyandurg"
    },
    {
        "ac_no": 155,
        "zone": "Zone 5",
        "district_no": 21,
        "district_name": "Ananthapuramu",
        "ac_name": "Raptadu",
        "dsp_name": "Srinivasulu",
        "mobile_no": "94906 19663",
        "district_id": "ananthapuramu",
        "constituency_id": "raptadu"
    },
    {
        "ac_no": 156,
        "zone": "Zone 5",
        "district_no": 22,
        "district_name": "Sri Sathya Sai",
        "ac_name": "Madakasira",
        "dsp_name": "Hussain Peera",
        "mobile_no": "9440796840",
        "district_id": "sri_sathya_sai",
        "constituency_id": "madakasira"
    },
    {
        "ac_no": 157,
        "zone": "Zone 5",
        "district_no": 22,
        "district_name": "Sri Sathya Sai",
        "ac_name": "Hindupur",
        "dsp_name": "Anjaksha",
        "mobile_no": null,
        "district_id": "sri_sathya_sai",
        "constituency_id": "hindupur"
    },
    {
        "ac_no": 158,
        "zone": "Zone 5",
        "district_no": 22,
        "district_name": "Sri Sathya Sai",
        "ac_name": "Penukonda",
        "dsp_name": "Hussain Peera",
        "mobile_no": "9440796840",
        "district_id": "sri_sathya_sai",
        "constituency_id": "penukonda"
    },
    {
        "ac_no": 159,
        "zone": "Zone 5",
        "district_no": 22,
        "district_name": "Sri Sathya Sai",
        "ac_name": "Puttaparthi",
        "dsp_name": "Vasudevan",
        "mobile_no": "9440796849",
        "district_id": "sri_sathya_sai",
        "constituency_id": "puttaparthi"
    },
    {
        "ac_no": 160,
        "zone": "Zone 5",
        "district_no": 22,
        "district_name": "Sri Sathya Sai",
        "ac_name": "Dharmavaram",
        "dsp_name": "T Sreenivasulu",
        "mobile_no": "9440796830",
        "district_id": "sri_sathya_sai",
        "constituency_id": "dharmavaram"
    },
    {
        "ac_no": 161,
        "zone": "Zone 5",
        "district_no": 22,
        "district_name": "Sri Sathya Sai",
        "ac_name": "Kadiri",
        "dsp_name": "Srelatha",
        "mobile_no": "9440796850",
        "district_id": "sri_sathya_sai",
        "constituency_id": "kadiri"
    },
    {
        "ac_no": 162,
        "zone": "Zone 4",
        "district_no": 24,
        "district_name": "Annamayya",
        "ac_name": "Thamballapalle",
        "dsp_name": "Kesappa",
        "mobile_no": "9440796738",
        "district_id": "annamayya",
        "constituency_id": "thamballapalle"
    },
    {
        "ac_no": 163,
        "zone": "Zone 4",
        "district_no": 24,
        "district_name": "Annamayya",
        "ac_name": "Pileru",
        "dsp_name": "Sayed Mahaboob Basha",
        "mobile_no": "9121100715",
        "district_id": "annamayya",
        "constituency_id": "pileru"
    },
    {
        "ac_no": 164,
        "zone": "Zone 4",
        "district_no": 24,
        "district_name": "Annamayya",
        "ac_name": "Madanapalle",
        "dsp_name": "Kesappa",
        "mobile_no": "9440796738",
        "district_id": "annamayya",
        "constituency_id": "madanapalle"
    },
    {
        "ac_no": 165,
        "zone": "Zone 4",
        "district_no": 25,
        "district_name": "Chittoor",
        "ac_name": "Punganur",
        "dsp_name": "Sudhakar Reddy",
        "mobile_no": "9440796732",
        "district_id": "chittoor",
        "constituency_id": "punganur"
    },
    {
        "ac_no": 166,
        "zone": "Zone 4",
        "district_no": 26,
        "district_name": "Tirupati",
        "ac_name": "Chandragiri",
        "dsp_name": "Jaswanth",
        "mobile_no": null,
        "district_id": "tirupati",
        "constituency_id": "chandragiri"
    },
    {
        "ac_no": 167,
        "zone": "Zone 4",
        "district_no": 26,
        "district_name": "Tirupati",
        "ac_name": "Tirupati",
        "dsp_name": "Kulashekar,Surendra Reddy.",
        "mobile_no": "94,913,612,579,491,000,000",
        "district_id": "tirupati",
        "constituency_id": "tirupati"
    },
    {
        "ac_no": 168,
        "zone": "Zone 4",
        "district_no": 26,
        "district_name": "Tirupati",
        "ac_name": "Srikalahasti",
        "dsp_name": "Bheema Rao",
        "mobile_no": "9440796761",
        "district_id": "tirupati",
        "constituency_id": "srikalahasti"
    },
    {
        "ac_no": 169,
        "zone": "Zone 4",
        "district_no": 26,
        "district_name": "Tirupati",
        "ac_name": "Sathyavedu",
        "dsp_name": null,
        "mobile_no": "9440900746",
        "district_id": "tirupati",
        "constituency_id": "sathyavedu"
    },
    {
        "ac_no": 170,
        "zone": "Zone 4",
        "district_no": 25,
        "district_name": "Chittoor",
        "ac_name": "Nagari",
        "dsp_name": "Ravi Kumar",
        "mobile_no": "8333992296",
        "district_id": "chittoor",
        "constituency_id": "nagari"
    },
    {
        "ac_no": 171,
        "zone": "Zone 4",
        "district_no": 25,
        "district_name": "Chittoor",
        "ac_name": "Gangadhara Nellore",
        "dsp_name": "Ravi Kumar",
        "mobile_no": "83339 92296",
        "district_id": "chittoor",
        "constituency_id": "gangadhara_nellore"
    },
    {
        "ac_no": 172,
        "zone": "Zone 4",
        "district_no": 25,
        "district_name": "Chittoor",
        "ac_name": "Chittoor",
        "dsp_name": "Srinivasamurthy",
        "mobile_no": "9440796704",
        "district_id": "chittoor",
        "constituency_id": "chittoor"
    },
    {
        "ac_no": 173,
        "zone": "Zone 4",
        "district_no": 25,
        "district_name": "Chittoor",
        "ac_name": "Puthalapattu",
        "dsp_name": "Srinivas",
        "mobile_no": null,
        "district_id": "chittoor",
        "constituency_id": "puthalapattu"
    },
    {
        "ac_no": 174,
        "zone": "Zone 4",
        "district_no": 25,
        "district_name": "Chittoor",
        "ac_name": "Palamaner",
        "dsp_name": "Sudhakar Reddy",
        "mobile_no": "9440796732",
        "district_id": "chittoor",
        "constituency_id": "palamaner"
    },
    {
        "ac_no": 175,
        "zone": "Zone 4",
        "district_no": 25,
        "district_name": "Chittoor",
        "ac_name": "Kuppam",
        "dsp_name": "Sudhakar Reddy",
        "mobile_no": "9440796732",
        "district_id": "chittoor",
        "constituency_id": "kuppam"
    }
];

  const RightContainer = ()=>{


    let content = <div>

        {<div>
          <h3>
          {districtId}
          </h3>
        </div>}


        <Table striped bordered size="sm">
      <thead>
      <h6></h6>
        <tr>
          
          <th>Designation</th>
          <th>Name</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Chief Election Commissioner</td>
          <td>Shri Rajiv Kumar</td>
          <td>cec@eci.gov.in</td>
        </tr>
        <tr>
          
          <td>Election Commissioner</td>
          <td>Shri Gyanesh Kumar</td>
          <td>ecgk@eci.gov.in</td>
        </tr>
        <tr>
          
          <td>Election Commissioner</td>
          <td>Dr. Sukhbir Singh Sandhu</td>
          <td>ecsss@eci.gov.in</td>
        </tr>
      </tbody>
    </Table>


    </div>

    return <div> {content}
      
    </div>
  }


  const toggleMenu = () => {
    setOpenPopup(!openPopup);
  }

  const mapClick = (districtId: string) =>{
    setDistrictId(districtId);

    console.log(districtId)
    let o  = officers1.find((i)=>i['constituency_id'].toLowerCase()==districtId.toLowerCase());
    setDistrictContent(o)
    if(districtId=="") {
      setDistrictContent(undefined);
    }
  }

  useEffect(() => {
    setLabel(dataset.label);
  }, [dataset]);

  const [label, setLabel] = useState(dataset.label);

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
              <Col>
              <h2 className="header-margin">Assembly Constituencies</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12">
              <AssemblyMap link={dataset.link} map={dataset.map} mapClick={mapClick} propName={"assembly"}/>
              </Col>
              <Col lg="6" md="12" className="table-responsive-sm">
              <RightContainer d={districtContent}/>
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

export default Assembly;
