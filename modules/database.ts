import { db } from "./firebase";
import { doc, getDoc} from "firebase/firestore";

export async function getNotes(user: any, limit: number) {
    const docReference = doc(db, "Grades", user);
    const document = await getDoc(docReference);
    if (document.exists()) {
        console.log("Successfuly acquired document");
    } else {
        console.log("Could not get document")
    }
    return fetchNoteData(document.data(), limit);
}


function fetchNoteData(notesDocument: any, limit: number) {
    let fetchedData: Array<object> = [];
    for (let k in notesDocument) {
        for (let i=0; i < notesDocument[k].length; i++) {
            let note = notesDocument[k][i];
            note["date"] = note["date"].toDate().toLocaleDateString().replaceAll("/", "-");
            
            fetchedData.push(note);
            if (limit > 0 && fetchedData.length === limit) {
                break;
            };
        }
    }
    return fetchedData;
}
