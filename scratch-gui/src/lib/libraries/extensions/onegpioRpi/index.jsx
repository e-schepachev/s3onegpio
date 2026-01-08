import onegpioRpiImage from './onegpioRpi.png';
import onegpioRpiInsetIconURL from './onegpioRpi-small.png';

const entry = {
        name: 'OneGpio Raspberry Pi',
        extensionId: 'onegpioRpi',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioRpiImage,
        insetIconURL: onegpioRpiInsetIconURL,
        description: 'OneGPIORpi',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    };

export {entry}; // loadable-extension needs this line.
export default entry;