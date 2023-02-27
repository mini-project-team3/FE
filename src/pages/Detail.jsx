import axios from "axios";
import { Card } from "react-bootstrap";
import { useQuery } from "react-query";
import '../App.css'
import Button from "../style/signinOrUp/Button";

const Detail = () => {

  let result = useQuery('상세조회', ()=>
    axios.get('/api/reveiws/{id}').then((a)=>{
     return a.data
    })
  )

 

    return(<div className="layout">
       {result.isLoading ? '로딩중' : <Card
        // key={result.data.id}
        bg="dark"
        text="white"
        style={{ width: "30rem", height: "20rem", borderRadius: "20px" }}
        className="my-2"
      >
        <Card.Header>result.data.title</Card.Header>
        <Card.Body>
          <Card.Title>result.data.contents</Card.Title>
          <Card.Text>result.data.nickname</Card.Text>
          <Card.Text>result.data.createdAT</Card.Text>
        </Card.Body>
        <div className="detail-btn">
        <Button>수정</Button>
        <button>삭제</button>
        </div>
      </Card> }
       </div>
    )

};

export default Detail;
