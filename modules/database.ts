import { db } from "./firebase";
import { doc, getDoc} from "firebase/firestore";

export async function getNotes(user: any, limit: number = 0) {
    const docReference = doc(db, "Grades", user);
    const document = await getDoc(docReference);
    if (document.exists()) {
        console.log("Successfuly acquired document");
    } else {
        console.log("Could not get document")
    }
    return formatNoteData(document.data(), limit);
}


function formatNoteData(notesDocument: any, limit: number) {
    console.log("limit=", limit)
    let formattedData: Array<object> = [];
    for (let k in notesDocument) {
        for (let i=0; i < notesDocument[k].length; i++) {
            let note = notesDocument[k][i];
            note["date"] = note["date"].toDate().toLocaleDateString().replaceAll("/", "-");
            
            if (limit > 0 && formattedData.length === limit) {
                break;
            };
            formattedData.push(note);
        }
    }
    console.log(formattedData);
    return formattedData;
}
