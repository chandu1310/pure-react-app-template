import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import AppBar from '@material-ui/core/AppBar';
import Header from '../common/header';
// import Footer from '../common/footer';
import Styles from './App.less';

const App = () => (
  <div className={Styles.page}>
    <Header title="Hello World!" />
    <div className={Styles.content}>
      <Card className={Styles.sampleCard}>
        <Typography variant="body1" color="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
          It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
      </Card>
    </div>
    <div className={Styles.appBar}>
      Hellow
    </div>
  </div>
);

export default App;
