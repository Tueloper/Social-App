/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Screen } from 'styles';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { ReactComponent as plus } from './svg/plus.svg';
import { ReactComponent as Loader } from './svg/loader.svg';
import { updatePicture } from '../redux/action/auth';
// import Alert from './alert';

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: wrap column;
p{
  font-weight: 400
}
img{
  max-width: 100%;
   height: auto;
}
${Screen.pc`
// height: 81vh
`}
${Screen.tablet`
img{
  // width: 70%
}
.row{
  flex-direction: column-reverse
}
p{
margin-bottom: 100px
}
`}
${Screen.miniTablet`
height: auto
p{
margin-bottom: 100px
}
// overflow: auto
`}
${Screen.screen425`
height: auto
`}
`;
// const Title = styled.h1`
// font-family: ${Basics.fonts.PeaceSans};
// color: #F44C49
// text-align: center;
// margin-bottom: 50px;
// ${Screen.tablet`
// margin-top: 50px;
// margin-bottom: 20px;
// `}
// ${Screen.largePhone`
// font-size: 35px
// `}
// `;
// const Header = styled.div`
// width: 100%
// ${Screen.tablet`
// text-align: center
// `}
// ${Screen.largePhone`
// // display: none
// `}
// `;

// const FormCon = styled.div`
// display: flex
// justify-content: center
// width: 100%
// form{
//   display: flex;
//   flex-flow: column nowrap
//   width: 70%
// }
// input{
//   margin-bottom: 30px
//   border: 1px solid #5555
//   padding: 10px 30px
//   border-radius: 15px
//   outline: none
// }
// input::placeholder{
//   color: #5555
// }
// .btn{
//   width: 40%
//   border-radius: 15px
//   outline: none
// }
// ${Screen.screen993`
// justify-content: center
// `}
// ${Screen.tablet`
// margin-top: 100px
// `}
// ${Screen.largePhone`
// margin-bottom: 20px
// form{
//   width: 100%
// }
// `}
// `;


const MaterialImage = styled.div`
margin: 20px
margin-top: 5px
position: relative;
display: flex;
width: 75%;
justify-content: center;
.overlay{
  width: 150px;
  padding: 10px;
  min-height: 150px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  position: absolute;
  justify-content: center;
}
.overlay > input {
  display: none;
}
.overlay img{
  width: 100%
  height: 100%
  z-index: 1000
  cursor: pointer
}
.overlay label{
  display: none
}
.overlay:hover label{
  display: contents
}
.overlay:hover{
  background: #555
  // cursor: pointer
}

.box{
  width: 150px;
  padding: 10px;
  min-height: 150px;
  border: 1px solid #5555;
  border-radius: 10px;
  background: #fff;
  margin : 0 auto
// position: relative;
}
.box span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #5555
}
#file-input1{
  width: 100%
  height: 100%
  z-index: 1000
  cursor: pointer
}
`;

const ButtonContainer = styled.div`
display: flex
width: 100%
justify-content: center;
align-items: center
`;

const Home = ({ updatePicture, auth: { isAuthenticated, user } }) => {
  // const [formData, setFormData] = useState({
  //   profilePicture: '',
  //   upload: '',
  //   loading: false,
  // });

  // const {
  //   profilePicture, loading, upload
  // } = formData;

  // const handleChange = (e) => {
  //   setFormData({ ...formData, upload: e.target.files[0], profilePicture: URL.createObjectURL(e.target.files[0]) });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormData({ ...formData, loading: true });
  //   await updatePicture(upload);
  //   setFormData({ ...formData, loading: false });
  // };

  return (
    <Wrapper >
      <h4>Home Page</h4>
      {/* <MaterialImage>
        <div className="overlay">
          <label htmlFor="file-input1">
            <img src={plus} alt="" style={{ width: '30%', padding: '30px' }} />
          </label>
          <input id="file-input1" type="file" onChange={(e) => handleChange(e)} />
        </div>
        <div className='box'>
          {
            profilePicture !== '' ? <img src={profilePicture} alt="" style={{ width: '100%', height: '100%' }} />
              : <span style={{ fontSize: '12px' }} >
                +
                </span>
          }
        </div>
      </MaterialImage>
      <ButtonContainer >
        <Button variant="outline-danger" type='click' onClick={(e) => onSubmit(e)} >{loading ? <Loader /> : 'Upload Image'}</Button>
      </ButtonContainer> */}

    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  auth: state.Auth,
});

export default connect(mapStateToProps, { updatePicture })(Home);
