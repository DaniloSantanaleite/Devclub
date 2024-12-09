let ageOfperson = 11

switch (true) {

    case (ageOfperson >= 10 && ageOfperson < 15):
      console.log("CHILD") 
    break;

    case (ageOfperson >= 15 && ageOfperson < 20):
      console.log("TEENAGER") 
    break;

    case (ageOfperson >= 20 && ageOfperson < 60):
        console.log("ADULT") 
    break;

    case (ageOfperson >= 60):
        console.log("OLD") 
    break;
    

    default:
        console.log("YOU ARE PROBABLY DEAD OR NOT BORN YET")
        break;
}