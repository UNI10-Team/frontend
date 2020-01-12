import bundle from '../util/nls';

export default class I18NService {

    getBundle() {
        return bundle.messages;
    }
}

export const i18NService = new I18NService();
