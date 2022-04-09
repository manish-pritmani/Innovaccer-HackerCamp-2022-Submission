import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Reward = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/select-address");
  }
  return (
    <div>
        <div className="card mx-5 my-2">
        
        <div className="card-body">
          <h5 className="card-title">Select the reward you want</h5>
          
          
          <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://www.kukclean.com/product-images/kukcelan+goodies+bag_cropped.png/354458000001766454/200x200"/>
    <Card.Body>
      <Card.Title>Chocolate Pack and Happiness Inside :)</Card.Title>
      <Card.Text>
        This pack consist of a 4 chocolate box and a gift box as per your token issued.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={handleClick}>Continue with this choice</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.gannett-cdn.com/presto/2020/09/14/USAT/144f25d4-47f2-4886-870e-39abce05fcd5-best-gifts-hero.jpg?auto=webp&crop=2114,1189,x3,y0&format=pjpg&width=1200"/>
    <Card.Body>
      <Card.Title>Your Audio buddies with Happiness Inside :)</Card.Title>
      <Card.Text>
        This pack consist of a 4 chocolate box and a gift box as per your token issued.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={handleClick}>Continue with this choice</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.jasani.ae/web/image/product.image/655/image_1024/ARGAKI%20-%20SANTHOME%20Gift%20Set-%20SS%20Bottle%2C%20Notebook%20and%20Pen?unique=686c8e4" />
    <Card.Body>
      <Card.Title>Bottle, Notebook and Pen! Write yourself out :)</Card.Title>
      <Card.Text>
        Write your heart out and feel happy with this goodies set.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={handleClick}>Continue with this choice</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://user-images.githubusercontent.com/65852995/162997439-8ea3c022-af18-4ddb-b4ce-f7586a4659cc.gif" />
    <Card.Body>
      <Card.Title>Pick your own Happiness!</Card.Title>
      <Card.Text>
        With your token generated, you can pick set of goodies within that limit, and make your own happiness filled box.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary" onClick={handleClick}>Pick and Customise</Button>
      
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
      </div>
    </div>
  );
}

export default Reward;