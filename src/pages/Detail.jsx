import axios from "axios";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import '../App.css'
import {Button, Delbutton} from "../style/signinOrUp/Button";
import LoadingSpinner from "../style/LoadingSpinner";
const Detail = () => {

  let result = useQuery('상세조회', ()=>
    axios.get(`${process.env.REACT_APP_BASEURL}/api/reviews/{id}`).then((a)=>{
     return a.data
    })
  )
 
  
 
    

    return(<div className="layout">
       <button>👍</button>
       {result.isLoading ? <LoadingSpinner/> : 
         
       <Card
        key={result.data.id}
        bg="dark"
        text="white"
        style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
        className="my-2"
      >
        
        <Card.Header>{result.data.title}</Card.Header>
        <Card.Body>
          <Card.Title>{result.data.contents}</Card.Title>
          <Card.Text>{result.data.nickname}</Card.Text>
          <Card.Text>{result.data.createdAT}</Card.Text>
        </Card.Body>
        <div>
        <Button>수정</Button>
        <Delbutton>삭제</Delbutton>
        </div>
      </Card> }
        <div>
        
       </div>
      </div>
       
    )

};

export default Detail;
