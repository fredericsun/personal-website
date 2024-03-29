import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Yue Sun Profile Pic" />
            <div className="columns download">
               <p>
                  <a href={resumeDownload} className="button">Resume</a>
               </p>
            </div>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
