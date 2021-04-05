import React from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';

// import { Button } from '@material-ui/core'
// import GitHubIcon from '@material-ui/icons/GitHub';
import './ProjectList.css'

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0px',
    borderRadius: '0px',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

function ProjectList({ src, title, client, role, loginEmail, loginPassword, technologyStack, detailDescription, githubLink, visitSiteLink }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="project">
      <img src={src} alt="" />
      <div className="project__info">
        <h2>{title}</h2>
        <Button variant="outlined" className='project__button' onClick={openModal}>Read More &raquo;</Button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="project-modal-container">
          {/* <img src={src} className='project-modal-thumb' alt="description" /> */}
          <div className="project__modalinfo">
            <h2>{title}</h2>
            {client && <h5><span className="sub-headings">Project Client</span> - {client}</h5>}
            {role && <h5><span className="sub-headings">Role</span> - {role}</h5>}
            <h6>{detailDescription}</h6>
            { loginEmail && loginPassword && 
              <>
                <h5><span className="sub-headings">Login Details</span></h5>
                <p><span className="sub-headings">Email - </span>{loginEmail}</p>
                <p><span className="sub-headings">Password - </span>{loginPassword}</p>
              </>
            }
            <h5><span className="sub-headings">Technology Stack</span></h5>
            <div className="techStacks">
              {technologyStack && technologyStack.map(stack => {
                return (
                  <span className="techStack">{stack}</span>
                )
              })}
            </div>
            <div className="project__live">
              <Button onClick={closeModal}>close</Button>
              <div>
                {githubLink && <a href={githubLink} target="_blank" className="href__link__github">GITHUB</a>}
              </div>
              <div>
                {visitSiteLink && <a href={visitSiteLink} target="_blank" className="href__link__site">VISIT SITE ✌ </a> }
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectList
