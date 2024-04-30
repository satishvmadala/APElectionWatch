

import './index.css'
import Footer from './components/Footer';

// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import AppNav from './components/AppNav';

const Eci = () => {
  
  
  

  const Officers1 = ()=>{


    let content = <div className="table-responsive-sm">

        {/*<div>
          {districtId}
        </div>*/}

        

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

const Officers2 = ()=>{


      let content = <div className="table-responsive-sm">

        <Table striped bordered size="sm">
          <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Contact</th>
            <th>Phone.No</th>
          </tr>
          </thead>
          <tbody>
        <tr>
          <td>Mr. Dharmendra Sharma</td>
          <td>Senior Deputy Election Commissioner</td>
          <td>d.s@nic.in, dg.iiidem@eci.gov.in</td>
          <td>23052180, 23052228</td>
        </tr>
        <tr>
          <td>Mr. Nitesh Kumar Vyas</td>
          <td>Senior Deputy Election Commissioner</td>
          <td>decnv@eci.gov.in</td>
          <td>23052232, 23052004</td>
        </tr>
        <tr>
          <td>Mr. R.K. Gupta</td>
          <td>Deputy Election Commissioner</td>
          <td>decrkg@eci.gov.in</td>
          <td>23052093, 23052032</td>
        </tr>
        <tr>
          <td>Mr. Hirdesh Kumar</td>
          <td>Deputy Election Commissioner</td>
          <td>dechks@eci.gov.in</td>
          <td>23052081, 23052226</td>
        </tr>
        <tr>
          <td>Mr. Ajay Bhadoo</td>
          <td>Deputy Election Commissioner</td>
          <td>decajb@eci.gov.in</td>
          <td>23052157, 23052234</td>
        </tr>
        <tr>
          <td>Mr. Manoj Kumar Sahoo</td>
          <td>Deputy Election Commissioner</td>
          <td>decmks@eci.gov.in</td>
          <td>23052114</td>
        </tr>
        <tr>
          <td>Sh. B. Narayanan</td>
          <td>Director General (Media & Communication)</td>
          <td>dgmedia@eci.gov.in</td>
          <td>23052239</td>
        </tr>
        <tr>
          <td>Dr. Neeta Verma</td>
          <td>Director General (IT)</td>
          <td>dgnv.it@eci.gov.in</td>
          <td>23052121</td>
        </tr>
        <tr>
          <td>Mr. H.R. SRINIVASA</td>
          <td>Special Officer (IT)</td>
          <td>Dec-it@eci.gov.in</td>
          <td>23052023,23052024</td>
        </tr>
        <tr>
          <td>Mr. N.N.Butolia</td>
          <td>Sr. Principal Secretary</td>
          <td>narendranb@eci.gov.in</td>
          <td>23052016,23052050,29531638</td>
        </tr>
        <tr>
          <td>Mr. Sumit Mukherjee</td>
          <td>Sr. Principal Secretary</td>
          <td>smukherjee@eci.gov.in</td>
          <td>23052246,23052001</td>
        </tr>
        <tr>
          <td>Mr. Kuldeep Kumar Saharawat</td>
          <td>Director</td>
          <td>diridm@eci.gov.in</td>
          <td>25303449,25303409</td>
        </tr>
        <tr>
          <td>Mr. Ashok Kumar</td>
          <td>Director (IT) O & M</td>
          <td>dirit@eci.gov.in</td>
          <td>23052073</td>
        </tr>
        <tr>
          <td>Mr. Pankaj Srivastava</td>
          <td>Director Expenditure</td>
          <td>director-ee@eci.gov.in</td>
          <td>23052061</td>
        </tr>
        <tr>
          <td>Ms. Subhra Sexena</td>
          <td>Director</td>
          <td>shubhra.saxena@eci.gov.in</td>
          <td>23052248</td>
        </tr>
        <tr>
          <td>Mr. Yashvendra Singh</td>
          <td>Director Expenditure</td>
          <td>dir-expenditure@eci.gov.in</td>
          <td>25303411,25303451</td>
        </tr>
        <tr>
          <td>Mr. Santosh Ajmera</td>
          <td>Director</td>
          <td>director-sveep@eci.gov.in</td>
          <td>23340032</td>
        </tr>
        <tr>
          <td>Mr. S. Sundar Rajan</td>
          <td>Director</td>
          <td>sundar.rajan@eci.gov.in</td>
          <td>23052243</td>
        </tr>
        <tr>
          <td>Mr. Sameer Gupta</td>
          <td>Dir (IT)</td>
          <td>director-it2@eci.gov.in</td>
          <td>23052026</td>
        </tr>
        <tr>
          <td>Ms. Deepali Masirkar</td>
          <td>Director</td>
          <td>dir-dm@eci.gov.in</td>
          <td>23052021</td>
        </tr>
        <tr>
          <td>Mr. Vijay Kumar Pandey</td>
          <td>Director (Law)</td>
          <td>vijay78@eci.gov.in</td>
          <td>23052237,23052238</td>
        </tr>
        <tr>
          <td>Mr. K.D.K. Verma</td>
          <td>Principal Secretary</td>
          <td>dilvar65.eci@gov.in</td>
          <td>23052060</td>
        </tr>
        <tr>
          <td>Mr. S.B. Joshi</td>
          <td>Principal Secretary</td>
          <td>sbjoshi@eci.gov.in</td>
          <td>23052242</td>
        </tr>
        <tr>
          <td>Mr. Pramod Kumar Sharma</td>
          <td>Principal Secretary</td>
          <td>pramod@eci.gov.in</td>
          <td>23052057</td>
        </tr>
        <tr>
          <td>Mr. Darsuo Thang</td>
          <td>Principal Secretary</td>
          <td>darsuo.thang@eci.gov.in</td>
          <td>23303475</td>
        </tr>
        <tr>
          <td>Mr. Malay Mallick</td>
          <td>Principal Secretary</td>
          <td>malaym.eci@gov.in</td>
          <td>23052058,22598941</td>
        </tr>
        <tr>
          <td>Mr. Avinash Kumar</td>
          <td>Principal Secretary</td>
          <td>avinash.kr@eci.gov.in</td>
          <td>23052055,22486342</td>
        </tr>
        <tr>
          <td>Mr. Arvind Anand</td>
          <td>Principal Secretary</td>
          <td>arvind.anand@eci.gov.in</td>
          <td>23052063,25126525</td>
        </tr>
        <tr>
          <td>Mr. Rahul Sharma</td>
          <td>Principal Secretary</td>
          <td>rahulsharma.eci@eci.gov.in</td>
          <td>23052070</td>
        </tr>
        <tr>
          <td>Mr. Ajoy Kumar</td>
          <td>Principal Secretary</td>
          <td>ajoykumar@eci.gov.in</td>
          <td>23052067</td>
        </tr>
        <tr>
          <td>Mohammad Umar</td>
          <td>Principal Secretary</td>
          <td>mohammed.umar@eci.gov.in</td>
          <td>23052066</td>
        </tr>
        <tr>
          <td>Mr. T.C.Kom</td>
          <td>Principal Secretary</td>
          <td>tckom@eci.gov.in</td>
          <td>23488502</td>
        </tr>
        <tr>
          <td>Ms. Pushpa N. Lakra</td>
          <td>Principal Secretary</td>
          <td>pnlakrai.eci@gov.in</td>
          <td>23052074,23344521</td>
        </tr>
        <tr>
          <td>Mr. N.T.Bhutia</td>
          <td>Secretary</td>
          <td>ntbhutia@eci.gov.in</td>
          <td>23052084,23237961</td>
        </tr>
        <tr>
          <td>Mr. B.C.Patra</td>
          <td>Secretary</td>
          <td>bcpatra@eci.gov.in</td>
          <td>23052079,23217525</td>
        </tr>
        <tr>
          <td>Mr. A.K.Pathak</td>
          <td>Secretary</td>
          <td>akpathak@eci.gov.in</td>
          <td>23052062</td>
        </tr>
        <tr>
          <td>Mr. Suman Kumar Das</td>
          <td>Secretary</td>
          <td>skdas.eci@eci.gov.in</td>
          <td>23052082,2305343</td>
        </tr>
        <tr>
          <td>Mr. Jaydev Lehiri</td>
          <td>Secretary</td>
          <td>jlahiri@eci.gov.in</td>
          <td>23052020,2605298</td>
        </tr>
        <tr>
          <td>Mr. Anoop Kumar</td>
          <td>Secretary</td>
          <td>anoopkr@eci.gov.in</td>
          <td>23052071,27298188</td>
        </tr>
        <tr>
          <td>Sh. Rakesh Kumar</td>
          <td>Secretary</td>
          <td>rakesh@eci.gov.in</td>
          <td>23052077</td>
        </tr>
        <tr>
          <td>Mr. Kumar Rajeev</td>
          <td>Secretary</td>
          <td>k.rajeev71@eci.gov.in</td>
          <td>25303461</td>
        </tr>
        <tr>
          <td>Sh. Madhusudan Gupta</td>
          <td>Secretary</td>
          <td>msgupta@eci.gov.in</td>
          <td>23052235</td>
        </tr>
        <tr>
          <td>Sh. Sujeet Kumar Mishra</td>
          <td>Secretary</td>
          <td>skmishrae.ci@eci.gov.in</td>
          <td>23052064,23217304</td>
        </tr>
        <tr>
          <td>Sh. Ajay Kumar Verma</td>
          <td>Secretary</td>
          <td>ajayverma@eci.gov.in</td>
          <td>23052017</td>
        </tr>
        <tr>
          <td>Sh. Binod Kumar</td>
          <td>Secretary</td>
          <td>bkumar@eci.gov.in</td>
          <td>23052151</td>
        </tr><tr>
          <td>Sh. Ashwani Kumar Mohal</td>
          <td>Secretary</td>
          <td>ashwanimohal@eci.gov.in</td>
          <td>23052019</td>
        </tr>
        <tr>
          <td>Sh. Soumyajit Ghosh</td>
          <td>Secretary</td>
          <td>soumyajit.g@eci.gov.in</td>
          <td>23052155</td>
        </tr>
        <tr>
          <td>Sh. Sanjeev Kumar Prasad</td>
          <td>Secretary</td>
          <td>sanjeevk.prasad@eci.gov.in</td>
          <td>23052144</td>
        </tr>
        <tr>
          <td>Sh. Santosh Kumar Dubey</td>
          <td>Secretary</td>
          <td>santoshdubey@eci.gov.in</td>
          <td>23052096</td>
        </tr>
        <tr>
          <td>Sh. Rajeev Ranjan</td>
          <td>Secretary</td>
          <td>rajivranjan@eci.gov.in</td>
          <td>25303430</td>
        </tr>
        <tr>
          <td>Sh. Amit Kumar</td>
          <td>Secretary</td>
          <td>amit@eci.gov.in</td>
          <td>23052097</td>
        </tr>
        <tr>
          <td>Sh. Naveen Saxena</td>
          <td>Consultant (I.C.)</td>
          <td>consultantic@eci.gov.in eci.intl.coop@gmail.com</td>
          <td>23052003</td>
        </tr>
        <tr>
          <td>Sh. Vipin Katara</td>
          <td>Consultant</td>
          <td>vipinkatara@gmail.com</td>
          <td>23052005</td>
        </tr>
        <tr>
          <td>Sh. Pawan Diwan</td>
          <td>Secretary</td>
          <td>pawandiwan@eci.gov.in</td>
          <td>23052133</td>
        </tr>
        <tr>
          <td>Ms. Lata Tripathi</td>
          <td>Secretary</td>
          <td>tiwarilata@eci.gov.in</td>
          <td>23052050</td>
        </tr>
        <tr>
          <td>Sh. Mukesh Kumar</td>
          <td>Secretary</td>
          <td>mukesh@eci.gov.in</td>
          <td>23052250</td>
        </tr>
        <tr>
          <td>Sh. Santosh Kumar</td>
          <td>Secretary</td>
          <td>santosh.kumar77@eci.gov.in</td>
          <td>23488512</td>
        </tr>
        <tr>
          <td>Sh. Navin Kumar</td>
          <td>Secretary</td>
          <td>nk.gautam@eci.gov.in</td>
          <td>23052119,23052119</td>
        </tr>
        <tr>
          <td>Sh. K.P.Singh</td>
          <td>Under Secretary</td>
          <td>kpseci78@eci.gov.in</td>
          <td>23052113</td>
        </tr>
        <tr>
          <td>Sh. Ritesh Singh</td>
          <td>Under Secretary</td>
          <td>ritesh@eci.gov.in</td>
          <td>23052104</td>
        </tr>
        <tr>
          <td>Ms. Tanuj Kumari</td>
          <td>Under Secretary</td>
          <td>tanuj@eci.gov.in</td>
          <td>23052224,40234737</td>
        </tr>
        <tr>
          <td>Sh. Abhishek Mohan</td>
          <td>Under Secretary</td>
          <td>abhishek.mohan@eci.gov.in</td>
          <td>23052181</td>
        </tr>
        <tr>
          <td>Sh. Rakesh Kumar</td>
          <td>Under Secretary</td>
          <td>rakesh@eci.gov.in</td>
          <td>23052129</td>
        </tr>
        <tr>
          <td>Sh. Prafull Awasthi</td>
          <td>Under Secretary</td>
          <td>prafullawasthi@eci.gov.in</td>
          <td>23052141</td>
        </tr>
        <tr>
          <td>Sh. Rakesh Kumar Saini</td>
          <td>Under Secretary</td>
          <td>rakeshsaini@eci.gov.in</td>
          <td>25303461</td>
        </tr>
        <tr>
          <td>Sh. O. P. Sahani</td>
          <td>Under Secretary</td>
          <td>opsahani@eci.gov.in</td>
          <td>23052069</td>
        </tr>
        <tr>
          <td>Sh. Abhishek Tiwari</td>
          <td>Under Secretary</td>
          <td>abhishektiwari@eci.gov.in</td>
          <td>23052037</td>
        </tr>
        <tr>
          <td>Sh. Love Kush Yadav</td>
          <td>Under Secretary</td>
          <td>lovekush28@eci.gov.in</td>
          <td>23488507</td>
        </tr>
        <tr>
          <td>Sh. Rajesh Kumar Singh</td>
          <td>Under Secretary</td>
          <td>rajesh@eci.gov.in</td>
          <td>23052131</td>
        </tr>
        <tr>
          <td>Sh. Dilip Kumar Mahto</td>
          <td>Under Secretary</td>
          <td>dilip@eci.gov.in</td>
          <td>23052080</td>
        </tr>
        <tr>
          <td>Sh. Naresh Kumar</td>
          <td>Under Secretary</td>
          <td>naresh@eci.gov.in</td>
          <td>23052010</td>
        </tr>
        <tr>
          <td>Sh. Brijesh Kumar</td>
          <td>Under Secretary</td>
          <td>brajeshkmr@eci.gov.in</td>
          <td>23052013</td>
        </tr>
        <tr>
          <td>Ms. Guncha Batra Aneja</td>
          <td>Under Secretary</td>
          <td>gunchabatra@eci.gov.in</td>
          <td>25303499</td>
        </tr>
        <tr>
          <td>Sh. Anup Kumar khakhlary</td>
          <td>Under Secretary</td>
          <td>khakhlaryanup@eci.gov.in</td>
          <td>23052068</td>
        </tr>
        <tr>
          <td>Sh. Manish Kumar</td>
          <td>Under Secretary</td>
          <td>mnayak86@eci.gov.in</td>
          <td>23052008</td>
        </tr>
        <tr>
          <td>Sh. Sanjay Kumar</td>
          <td>Under Secretary</td>
          <td>sk.sharma@eci.gov.in</td>
          <td>23052012</td>
        </tr>
        <tr>
          <td>Sh. Anil Kumar</td>
          <td>Under Secretary</td>
          <td>anilkumargarva@eci.gov.in</td>
          <td>23052049</td>
        </tr>
        <tr>
          <td>Ms. Anuradha Singh</td>
          <td>Under Secretary</td>
          <td>anu@eci.gov.in</td>
          <td>23052158</td>
        </tr>
        <tr>
          <td>Ms. Deepmala</td>
          <td>Under Secretary</td>
          <td>deeps@eci.gov.in</td>
          <td>23052099</td>
        </tr>
        <tr>
          <td>Ms. Jusmit Kaur</td>
          <td>Under Secretary</td>
          <td>jusmeetk@eci.gov.in</td>
          <td>23052217</td>
        </tr>
        <tr>
          <td>Sh. Manna Lal Meena</td>
          <td>Under Secretary</td>
          <td>mlmeena@eci.gov.in</td>
          <td>23052061</td>
        </tr>
        <tr>
          <td>Sh. Sheesh Ram</td>
          <td>Under Secretary</td>
          <td>sheesh@eci.gov.in</td>
          <td>23052168</td>
        </tr>
        <tr>
          <td>Sh. Rameshwar Prashad</td>
          <td>Under Secretary</td>
          <td>rameshwar@eci.gov.in</td>
          <td>23488511</td>
        </tr>
        <tr>
          <td>Sh. Surender Singh</td>
          <td>Under Secretary</td>
          <td>surender1.eci@eci.gov.in</td>
          <td>23052147</td>
        </tr>
        <tr>
          <td>Sh. Hargovind</td>
          <td>Under Secretary</td>
          <td>hargobind@eci.gov.in</td>
          <td>23052102</td>
        </tr>
        <tr>
          <td>Smt. Shilpi Srivastava</td>
          <td>Under Secretary</td>
          <td>srivastavashilpi@eci.gov.in</td>
          <td>23488510</td>
        </tr>
        <tr>
          <td>Sh. Ashuthosh M.</td>
          <td>Under Secretary</td>
          <td>ashuthoshm@eci.gov.in</td>
          <td>23052107</td>
        </tr>
        <tr>
          <td>Sh. Prakash Chandra Gupta</td>
          <td>Under Secretary</td>
          <td>prakashgupta@eci.gov.in</td>
          <td>23052164</td>
        </tr>
        <tr>
          <td>Sh. Raj Lal Rai</td>
          <td>Under Secretary</td>
          <td>rajlalrai@eci.gov.in</td>
          <td>25303501</td>
        </tr>
        <tr>
          <td>Kanishka Kumar</td>
          <td>Under Secretary</td>
          <td>kksharma@eci.gov.in</td>
          <td></td>
        </tr>
        <tr>
          <td>Vibhor Agrawal</td>
          <td>Under Secretary</td>
          <td>vibhoragrawal@eci.gov.in</td>
          <td></td>
        </tr>
        <tr>
          <td>Sandeep Kumar</td>
          <td>Under Secretary</td>
          <td>sandeepkumar@eci.gov.in</td>
          <td></td>
        </tr>
        <tr>
          <td>Sh. Naveen Diddi</td>
          <td>Technical Manager</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Avdhesh Kumar</td>
          <td>Under Secretary</td>
          <td>avdhesh@eci.gov.in</td>
          <td></td>
        </tr>
        <tr>
          <td>Mr. Krishna Kumar Tiwari</td>
          <td>Deputy Secretary (EDMD & Documentation)</td>
          <td>director.edmd@eci.gov.in</td>
          <td>29531638</td>
        </tr>
        <tr>
          <td>Mr. Anuj Chandak</td>
          <td>Joint Director (Media & SVEEP)</td>
          <td>anuj.chandak@nic.in</td>
          <td></td>
        </tr>

        
      </tbody>
    </Table>


    </div>

    return <div> {content}
      
    </div>
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
              <h2 className="header-margin mb-3">ECI</h2>
              </Col>

              <Col>
              
              </Col>

              
            </Row>


            <Row>
              <Col lg="6" md="12">

                <div>
                <a href="https://play.google.com/store/apps/details?id=in.nic.eci.cvigil" target="_blank">
                  <img src="/and-logo.png" /> Download Android App</a>
                </div>
                <br />
                <div>
                <a href="https://apps.apple.com/in/app/cvigil/id1455719541" target="_blank">
                  <img src="/ios-logo.png" /> Download IoS App</a>
                </div>
              </Col>
              <Col lg="6" md="12">
              <Officers1 />
              </Col>
            </Row>
            <Row>
              <Col>
                <Officers2 />
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

export default Eci
