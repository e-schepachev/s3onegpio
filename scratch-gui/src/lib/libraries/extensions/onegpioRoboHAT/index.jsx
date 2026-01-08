import onegpioRoboHATImage from './onegpioRoboHAT.png';
import onegpioRoboHATInsetIconURL from './onegpioRoboHAT-small.png';

const entry = {
        name: 'OneGpio RoboHAT MM1',
        extensionId: 'onegpioRoboHAT',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRoboHATImage,
        insetIconURL: onegpioRoboHATInsetIconURL,
        description: 'OneGPIORoboHAT',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    };

export {entry}; // loadable-extension needs this line.
export default entry;