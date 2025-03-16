function ProfilePic(){
    const imageURL='./src/assets/Love.png';
    const handleclick=()=>console.log("Helo");
    return (<img className="img" onClick={handleclick} src={imageURL}></img>);
}
export default ProfilePic