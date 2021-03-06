import { shallowMount } from '@vue/test-utils';
import 'src/module/sw-settings-listing/component/sw-settings-listing-option-general-info';
import 'src/app/component/form/sw-field';
import 'src/app/component/form/sw-text-field';
import 'src/app/component/form/sw-switch-field';
import 'src/app/component/form/sw-checkbox-field';
import 'src/app/component/form/field-base/sw-contextual-field';
import 'src/app/component/form/field-base/sw-base-field';
import 'src/app/component/form/field-base/sw-block-field';
import 'src/app/component/form/field-base/sw-field-error';

describe('src/module/sw-settings-listing/component/sw-settings-listing-option-general-info', () => {
    function createWrapper() {
        return shallowMount(Shopware.Component.build('sw-settings-listing-option-general-info'), {
            provide: {
                validationService: {}
            },
            mocks: {
                $tc: translationKey => translationKey
            },
            propsData: {
                next5983: true,
                sortingOption: {
                    label: 'Price descending'
                }
            },
            stubs: {
                'sw-card': '<div><slot></slot></div>',
                'sw-container': '<div><slot></slot></div>',
                'sw-field': Shopware.Component.build('sw-field'),
                'sw-text-field': Shopware.Component.build('sw-text-field'),
                'sw-switch-field': Shopware.Component.build('sw-switch-field'),
                'sw-checkbox-field': Shopware.Component.build('sw-checkbox-field'),
                'sw-contextual-field': Shopware.Component.build('sw-contextual-field'),
                'sw-base-field': Shopware.Component.build('sw-base-field'),
                'sw-block-field': Shopware.Component.build('sw-block-field'),
                'sw-field-error': Shopware.Component.build('sw-field-error')
            }
        });
    }

    let wrapper;

    beforeEach(() => {
        wrapper = createWrapper();
    });

    it('is a Vue.js component ', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });

    it('should display the correct name', () => {
        const textField = wrapper.find('.sw-field--text input');

        expect(textField.element.value).toBe('Price descending');
    });

    it('should display the correct active state', () => {
        const switchField = wrapper.find('.sw-field--switch input');
        const isActive = switchField.element.value;

        expect(isActive).toBe('on');
    });
});
