import React from 'react';
import { Card, Container } from 'react-bootstrap';
import CustomDataTable from './components/CustomDataTable';

const App = () => {
  const data = [
    { name: 'John Doe', age: 28, country: 'USA' },
    { name: 'Jane Doe', age: 24, country: 'Canada' },
    {
      age: 26,
      name: 'Norton Lewis',
      country: ' Floriston, Minnesota'
    },
    {
      age: 28,
      name: 'Gilbert Wilkinson',
      country: ' Choctaw, California'
    },
    {
      age: 30,
      name: 'Chelsea Tyson',
      country: ' Germanton, Pennsylvania'
    },
    {
      age: 30,
      name: 'Preston Lamb',
      country: ' Kennedyville, Tennessee'
    },
    {
      age: 20,
      name: 'Maricela Mathews',
      country: ' Esmont, Wyoming'
    },
    {
      age: 25,
      name: 'Ophelia Mendoza',
      country: ' Whipholt, Florida'
    },
    {
      age: 34,
      name: 'Callahan Rowland',
      country: ' Elbert, Oklahoma'
    },
    {
      age: 36,
      name: 'Stacie Bean',
      country: ' Sehili, Rhode Island'
    },
    {
      age: 24,
      name: 'Roach Garrett',
      country: ' Sugartown, South Carolina'
    },
    {
      age: 23,
      name: 'Morse Horne',
      country: ' Balm, Kentucky'
    },
    {
      age: 25,
      name: 'Lyons Fuentes',
      country: ' Eastvale, New Hampshire'
    },
    {
      age: 37,
      name: 'Holcomb Adams',
      country: ' Farmers, North Carolina'
    },
    {
      age: 29,
      name: 'Ila Kramer',
      country: ' Hayden, Arizona'
    },
    {
      age: 20,
      name: 'Noble Dickson',
      country: ' Carlton, Maine'
    },
    {
      age: 40,
      name: 'Coleman Pierce',
      country: ' Byrnedale, Louisiana'
    },
    {
      age: 39,
      name: 'Mccormick Rosa',
      country: ' Campo, West Virginia'
    },
    {
      age: 27,
      name: 'Finch Burch',
      country: ' Rockbridge, Nebraska'
    },
    {
      age: 27,
      name: 'Lucia Norton',
      country: ' Kingstowne, Kansas'
    },
    {
      age: 40,
      name: 'Ruth Slater',
      country: ' Centerville, Wisconsin'
    },
    {
      age: 30,
      name: 'Lawson Richard',
      country: ' Savage, Vermont'
    },
    {
      age: 23,
      name: 'Fowler Hart',
      country: ' Ona, Arkansas'
    },
    {
      age: 32,
      name: 'Carol Hudson',
      country: ' Taft, Palau'
    },
    {
      age: 23,
      name: 'Reva Leonard',
      country: ' Belva, New Mexico'
    },
    {
      age: 34,
      name: 'Enid Savage',
      country: ' Bagtown, District Of Columbia'
    },
    {
      age: 27,
      name: 'Kaufman Guerra',
      country: ' Dunnavant, Michigan'
    },
    {
      age: 31,
      name: 'Bessie Waller',
      country: ' Tivoli, Montana'
    },
    {
      age: 20,
      name: 'Chang Gillespie',
      country: ' Westmoreland, Marshall Islands'
    },
    {
      age: 37,
      name: 'Edwards Sharpe',
      country: ' Gulf, Texas'
    },
    {
      age: 27,
      name: 'Baird Bowen',
      country: ' Wiscon, Idaho'
    },
    {
      age: 24,
      name: 'Sharpe Barlow',
      country: ' Sandston, Connecticut'
    },
    {
      age: 20,
      name: 'Colette Jensen',
      country: ' Farmington, Delaware'
    },
    {
      age: 26,
      name: 'Megan Boyle',
      country: ' Vaughn, Alabama'
    },
    {
      age: 37,
      name: 'Bailey Rutledge',
      country: ' Juarez, North Dakota'
    },
    {
      age: 25,
      name: 'Arline Vaughan',
      country: ' Linwood, Missouri'
    },
    {
      age: 22,
      name: 'Ward Christensen',
      country: ' Cherokee, New York'
    },
    {
      age: 31,
      name: 'Lynette Richards',
      country: ' Boomer, Indiana'
    },
    {
      age: 36,
      name: 'Blackburn Kim',
      country: ' Cochranville, Maryland'
    },
    {
      age: 35,
      name: 'Chasity Fry',
      country: ' Malott, Virginia'
    },
    {
      age: 25,
      name: 'Pope Shepard',
      country: ' Epworth, Alaska'
    },
    {
      age: 34,
      name: 'Jerry Parsons',
      country: ' Kenvil, Virgin Islands'
    },
    {
      age: 39,
      name: 'Randall Short',
      country: ' Jeff, Utah'
    },
    {
      age: 35,
      name: 'Oneil Moody',
      country: ' Nogal, New Jersey'
    },
    {
      age: 39,
      name: 'Bennett Casey',
      country: ' Craig, Colorado'
    },
    {
      age: 24,
      name: 'Whitaker Stuart',
      country: ' Bordelonville, Federated States Of Micronesia'
    },
    {
      age: 30,
      name: 'Carrie Sanford',
      country: ' Rowe, Guam'
    },
    {
      age: 35,
      name: 'Marshall Mckinney',
      country: ' Hessville, Washington'
    },
    {
      age: 28,
      name: 'Gates Glass',
      country: ' Leland, Nevada'
    },
    {
      age: 39,
      name: 'Janie Beard',
      country: ' Fresno, American Samoa'
    },
    {
      age: 24,
      name: 'Rivas Bridges',
      country: ' Ronco, Iowa'
    },
    {
      age: 37,
      name: 'Diana Ratliff',
      country: ' Knowlton, Ohio'
    }
    // Add more data as needed
  ];

  return (
    <Container>
      <Card border="secondary">
        <Card.Header style={{ backgroundColor: '#800000', color: '#fff', fontSize: '16px', fontWeight: 'bold' }}>Pending Price Approvals</Card.Header>
        <Card.Body className='px-2'>
          <CustomDataTable data={data} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
