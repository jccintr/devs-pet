import { Pet } from "../models/Pet.js";
import { createMenuObject } from "../helpers/createMenuObject.js";

export const search = (req,res) => {
    let query = req.query.q;
    if(!query){
        res.redirect('/');
        return;
    }
    let list = Pet.getFromName(query);
    res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        query
     });
 }