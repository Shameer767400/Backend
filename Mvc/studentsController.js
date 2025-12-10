const getStudents = (req,res)=>{
    let stdData = {name:"aditya",roll:"123"};
    res.status(200).json(stdData);
}
export default getStudents;