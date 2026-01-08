import onegpioCpxImage from './onegpioCpx.jpg';
import onegpioCpxInsetIconURL from './onegpioCpx-small.png';

const entry = {
        name: 'OneGpio Playground Express',
        extensionId: 'onegpioCpx',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioCpxImage,
        insetIconURL: onegpioCpxInsetIconURL,
        description: 'OneGPIOCpx',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    };

    export {entry}; // loadable-extension needs this line.
    export default entry;