// * src/utils/BucketItem.jsx

// Node Module Imports
import { useParams } from 'react-router-dom';
// Local Module Imports
import { fileData } from '../data';

export default function FileDownloadLink({ itemKey, linkText }) {
    const params = useParams();

    if(!itemKey) itemKey = params.fileName;
    const url = fileData[itemKey];

    const onClick = (event) => {
        event.stopPropagation();
        window.open(`/#/files/${itemKey}`);
    }

    if(linkText)
        return <button onClick={onClick}>{linkText}</button>
    else
        window.location.href = url;
}
