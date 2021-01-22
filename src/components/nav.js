import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Basics, Screen } from 'styles';
import { links } from 'config';
import { Container } from 'react-bootstrap';
import { logout } from '../redux/action/auth';

const NavContainer = styled.div`
  position: fixed;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  margin: 0 auto;
  background-color: #fff;
  opacity: 0.85
  width: 100%;
  z-index: 1000
  transition: ${Basics.transition};
  ${Screen.largePhone`
    height: 80px;
  `};
`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: ${Basics.transition};
  }
  .hidden {
    visibility: hidden;
    transition: ${Basics.transition};
    transform: translate(0, -100%);
  }
`;
const Svg = styled.header`
font-family: ${Basics.fonts.PeaceSans};
color: #F44C49
display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 24px
  svg {
    fill: ${Basics.colors.bloodRed};
    width: 30px;
    height: 30px;
  }
  ${Screen.largePhone`
  font-size: 18px;
  `};
`;
const ListContainer = styled.div`
  font-size: ${Basics.fontSize.small};
  display: flex;
  flex-direction: row;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  ${Screen.largePhone`
  font-size: 15px;
  `};
`;

const NavList = styled.div`
  height: 23px;
  padding-left: 50px;
  ${Screen.largePhone`
  padding-left: 30px;
  `};
  ${Screen.smallPhone`
  padding-left: 15px;
  `};
`;

const Contents = styled.div`
display: flex;
justify-content: space-between
`;

class Navv extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPosition: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollPosition } = this.state;
    this.setState({
      scrollPosition: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPosition,
    });
  }

  render() {
    const navs = links.navLinks.map(
      (item, i) => <NavList key={i}>
        <Link style={{ color: '#F44C49' }} to={item.url}>{item.name}</Link>
      </NavList>,
    );

    const authList = (
        <NavList >
          <Link style={{ color: '#F44C49' }} onClick={this.props.logout} >logout</Link>
        </NavList>
    );
    return (
      <Transition>
        <NavContainer className={this.state.show ? 'active' : 'hidden'}>
          <Container fluid>
            <Contents>
              <Svg>
                <Link to={'/'} style={{ color: '#F44C49' }}>
                  WildLife.
                </Link>
              </Svg>
              <ListContainer>
                {!this.props.auth.isAuthenticated ? navs : authList}
              </ListContainer>
            </Contents>
          </Container>
        </NavContainer>
      </Transition>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.Auth,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navv);
