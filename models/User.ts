class User {
  constructor(public id: String, public firstname: String, public lastname: String, public imageUrl: String, public email: String, public studyProgramme: String, public chatToggle: String, public eventToggle: String) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.imageUrl = imageUrl;
    this.email = email;
    this.studyProgramme = studyProgramme;
    this.chatToggle = chatToggle;
    this.eventToggle = eventToggle;
  }
}

export default User;