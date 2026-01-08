import onegpioEsp32Image from './onegpioEsp32.png';
import onegpioEsp32InsetIconURL from './onegpioEsp32-small.png';

const entry = {
        name: 'OneGpio ESP-32',
        extensionId: 'onegpioEsp32',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioEsp32Image,
        insetIconURL: onegpioEsp32InsetIconURL,
        description: 'OneGPIOEsp32',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

    };

export {entry}; // loadable-extension needs this line.
export default entry;