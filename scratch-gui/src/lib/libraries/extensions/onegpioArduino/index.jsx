import onegpioArduinoImage from './onegpioArduino.png';
import onegpioArduinoInsetIconURL from './onegpioArduino-small.png';

const entry = {
        name: 'OneGpio Arduino',
        extensionId: 'onegpioArduino',
        collaborator: "Mr. Y's Lab",
        iconURL: onegpioArduinoImage,
        insetIconURL: onegpioArduinoInsetIconURL,
        description: 'OneGPIOArduino',
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        bluetoothRequired: false,
        helpLink: 'https://mryslab.github.io/s3-extend/'

};

export {entry}; // loadable-extension needs this line.
export default entry;
