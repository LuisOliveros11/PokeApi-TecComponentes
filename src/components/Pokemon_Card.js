import { Button, Card, Row, Col } from "react-bootstrap";

function Pokemon_Card({name, image}) {
  return (
    <div className="col-md-3">
        <Card style={{width: "18rem", background: "yellow"}}>
        <Card.Img src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button variant="primary">Ir</Button>
        </Card.Body>
        </Card>
    </div>
  );
}

export default Pokemon_Card;