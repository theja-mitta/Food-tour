import React from 'react';
// import axios from 'axios';

class Community extends React.Component {
    // state = {
    //     images: [],
    // };

    // componentDidMount() {
    //     let token = '3651120257.2514954.a69a1169bf3d4a278971af6c2540445b';
    //     let num_photos = 2;


    //     axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
    //         .then(res => {
    //             console.log(res.data.data[0].images);
    //                 this.setState({ images: res.data.data });
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    render() {
        return(
            <div className="instafeed" style={{ height: '700px', verticalAlign: 'middle', display: 'inline-block' }}>
                {/* { this.state.images.map((image) => {
                    return <img src={image.images.thumbnail.url} alt="insta-pic"/>
                })} */}
                INSTAGRAM in progress
            </div>
        )
    }
}

export default Community;