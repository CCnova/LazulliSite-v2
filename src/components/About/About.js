import React from 'react';
import classes from './About.module.css';
import InfoCard from '../InfoCard/InfoCard';
import img1 from '../../assets/img/laptop1.jpg';
import img2 from '../../assets/img/laptop2.jpg';
import Grid from '@material-ui/core/Grid';
import MyButton from '../Button/Button';
import Container from '@material-ui/core/Container';

const styles = {
    media: {
        height: "500px"
    }
}

const about = () => {
    return(
            <div>
                <Container maxWidth="sm">
                    <h1 className={`${classes.about} ${classes.lightBlue} ${classes.blackBackground}`}>Sobre nos</h1>
                </Container>
                <Grid container direction='row' justify='flex-end' alignItems='center' spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <InfoCard imgSrc={img1} imgAlt="img1" cardTitle="Quem somos?" textContent=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis lacinia elit, id pretium dolor faucibus ac. Praesent ac laoreet nunc. Praesent ultrices nisl sit amet commodo viverra. Aenean efficitur augue sed molestie cursus. Donec nec dignissim nisi, vitae porttitor nulla. Praesent sit amet est ornare, tempus eros ac, hendrerit tellus. Nam facilisis lacinia eleifend. Vivamus gravida odio nec molestie auctor. Nullam dictum velit id eros ornare ultrices. Donec hendrerit arcu ut convallis posuere.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur vehicula nisl id velit rutrum imperdiet. Sed turpis augue, varius in lobortis quis, malesuada in arcu. Nunc aliquam tortor eu aliquam tristique. Fusce semper tincidunt massa, sed pharetra augue cursus in. Pellentesque diam turpis, porta quis nibh in, consequat ornare odio. Donec sit amet mi dolor. Duis blandit augue nec arcu malesuada, eu scelerisque urna tincidunt. Mauris et velit eros. Fusce dictum arcu ac semper consectetur.  Etiam dictum hendrerit ultrices. Nulla eleifend facilisis scelerisque. Vivamus ut tincidunt odio, et convallis nisl." haveBtn={false} media={styles.media}/>
                    </Grid>
                </Grid>

                <Grid container direction='row' justify='flex-start' alignItems='flex-end' spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <InfoCard imgSrc={img2} imgAlt="img2" cardTitle="Quem somos?" textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis lacinia elit, id pretium dolor faucibus ac. Praesent ac laoreet nunc. Praesent ultrices nisl sit amet commodo viverra. Aenean efficitur augue sed molestie cursus. Donec nec dignissim nisi, vitae porttitor nulla. Praesent sit amet est ornare, tempus eros ac, hendrerit tellus. Nam facilisis lacinia eleifend. Vivamus gravida odio nec molestie auctor. Nullam dictum velit id eros ornare ultrices. Donec hendrerit arcu ut convallis posuere.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur vehicula nisl id velit rutrum imperdiet. Sed turpis augue, varius in lobortis quis, malesuada in arcu. Nunc aliquam tortor eu aliquam tristique. Fusce semper tincidunt massa, sed pharetra augue cursus in. Pellentesque diam turpis, porta quis nibh in, consequat ornare odio. Donec sit amet mi dolor. Duis blandit augue nec arcu malesuada, eu scelerisque urna tincidunt. Mauris et velit eros. Fusce dictum arcu ac semper consectetur.  Etiam dictum hendrerit ultrices. Nulla eleifend facilisis scelerisque. Vivamus ut tincidunt odio, et convallis nisl. Ut turpis orci, consectetur quis lectus quis, elementum luctus metus. In non leo justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum sem et sem feugiat, eget pulvinar mauris sollicitudin." haveBtn={false} media={styles.media}/>
                    </Grid>

                    <Grid item xs={1} sm={4} lg={2}>
                        <p></p>
                    </Grid>

                    <Grid item xs={11} sm={8} lg={4}>
                        <MyButton btnColor="rgb(0, 0, 0)" className={classes.workBtn} content="Trabalhe Conosco!" />
                    </Grid>
                    {/* <Grid item xs={1} lg={1}>

                    </Grid> */}

                    
                </Grid>

                {/* <Grid container direction="row" alignItems="center">
                    <Grid item xs={12}>
                        <MyButton className={classes.workBtn} content="Trabalhe Conosco!" />
                    </Grid>
                </Grid> */}


        </div>
    );
};

export default about;