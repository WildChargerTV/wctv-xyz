// * src/utils/BucketItem.jsx

// Node Module Imports
import { Sha256 } from '@aws-crypto/sha256-browser';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { S3RequestPresigner } from '@aws-sdk/s3-request-presigner';
import { parseUrl } from '@aws-sdk/url-parser';
import { formatUrl } from '@aws-sdk/util-format-url';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function BucketItem({ itemKey, linkText }) {
    const params = useParams();
    const [presignedUrl, setPresignedUrl] = useState(false);
    const [bucket, region] = ['wildcharger-xyz-s3', 'us-west-2'];

    if(!itemKey) itemKey = params.fileName;

    useEffect(() => {
        const s3ObjectUrl = parseUrl(`https://${bucket}.s3.${region}.amazonaws.com/${itemKey}`);

        async function getPresignedUrl() {
            const presigner = new S3RequestPresigner({
                credentials: {
                    accessKeyId: 'AKIATQPD7IBRH364LO5C',
                    secretAccessKey: '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'
                },
                region: region,
                sha256: Sha256
            });

            const url = await presigner.presign(new HttpRequest(s3ObjectUrl));
            return formatUrl(url);
        }

        getPresignedUrl()
        .then((url) => setPresignedUrl(url));
    }, [bucket, itemKey, region]);

    if(params?.fileName) 
        window.location.href = presignedUrl;
    else
        return presignedUrl && <Link to={presignedUrl} download target='_blank'>{linkText}</Link>;
}
