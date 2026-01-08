import onegpioPicoboardImage from './onegpioPicoboard.jpg';
import onegpioPicoboardInsetIconURL from './onegpioPicoboard-small.png';

const entry =  {
        name: 'OneGpio Picoboard',
        extensionId: 'onegpioPicoboard',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioPicoboardImage,
        insetIconURL: onegpioPicoboardInsetIconURL,
        description: 'OneGPIOPicoboard',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    };

export {entry}; // loadable-extension needs this line.
export default entry;