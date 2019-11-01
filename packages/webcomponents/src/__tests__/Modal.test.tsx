import CheckCircle from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import Button from '../Button/Button';
import { shallow, ShallowWrapper } from 'enzyme';
import Modal, { ModalProps } from '../Modal/Modal';
import React, { Fragment, ReactNode } from 'react';
import { OptionalKeys } from 'utility-types';

let modal: ShallowWrapper<ModalProps, any>;
const closeAction = jest.fn();
const confirmAction = jest.fn();

const setup = (
  isOpen = false,
  isSimpleModal = false,
  props?: Pick<ModalProps, OptionalKeys<ModalProps>>,
  dialogContent: ReactNode = <Fragment />
) => (
  modal = shallow<ModalProps>(<Modal
    {...props}
    topic='Awesome Topic'
    dialogContent={dialogContent}
    closeAction={closeAction}
    confirmAction={confirmAction}
    open={isOpen}
    isSimpleModal={isSimpleModal}
    modalqas={{
      content: 'modal-content',
      modal: 'modal',
      title: 'modal-title',
      actionCancel: 'modal-cancel-button',
      actionConfirm: 'modal-confirm-button',
      actions: 'modal-actions',
    }}
  />)
);

describe('Render Testing', () => {
  test('should include mandatory props', () => {
    setup();
    expect(modal.find(Button)).toHaveLength(0);
    expect(modal.prop('disableBackdropClick')).toBe(true);
    expect(modal.prop('disableEscapeKeyDown')).toBe(true);
  });

  test('should pass all data-qa\'s', () => {
    setup(true, true);

    expect(modal.find('[data-qa="modal"]').exists()).toBe(true);
    expect(modal.find('[data-qa="modal-title"]').exists()).toBe(true);
    expect(modal.find('[data-qa="modal-cancel-button"]').exists()).toBe(true);
    expect(modal.find('[data-qa="modal-confirm-button"]').exists()).toBe(true);
    expect(modal.find('[data-qa="modal-actions"]').exists()).toBe(true);
  });

  test('should include optional props', () => {
    setup(
      true, true,
      {
        okButtonText: 'Awesome Ok Text',
        cancelButtonText: 'Awesome Cancel Text',
        modalType: 'warning',
      }
    );

    expect(modal.find('[data-qa="modal-title"]').childAt(1).text()).toBe('Awesome Topic');
    expect(modal.find(Button).at(0).prop('label')).toBe('Awesome Cancel Text');
    expect(modal.find(Button).at(1).prop('label')).toBe('Awesome Ok Text');
  });

  test('should show CheckCircle when modalType == check', () => {
    setup(true, true);

    expect(modal.exists()).toBe(true);
    expect(modal.find(CheckCircle).exists()).toBe(true);
  });

  test('should show Warning Triangle when modalType == check', () => {
    setup(true, true, { modalType: 'warning' });

    expect(modal.find(WarningIcon).exists()).toBe(true);
  });
});

describe('Action Testing', () => {
  beforeAll(() => setup(true, true));
  test('Ok button should work', () => {
    const okButton = modal.find('[data-qa="modal-confirm-button"]');
    okButton.simulate('click');
    expect(confirmAction).toHaveBeenCalledWith();
    expect(confirmAction).toHaveBeenCalledTimes(1);
  });

  test('Cancel button should work', () => {
    const cancelButton = modal.find('[data-qa="modal-cancel-button"]');
    cancelButton.simulate('click');
    expect(closeAction).toHaveBeenCalledWith();
    expect(closeAction).toHaveBeenCalledTimes(1);
  });
});

describe('Content Testing', () => {
  const content = <div>Content</div>;
  beforeAll(() => setup(true, false, {}, content));

  test('should', () => {
    expect(modal.find('[data-qa="modal-content"]').children().exists()).toBe(true);
    expect(modal.find('[data-qa="modal-content"]').children()).toStrictEqual(shallow(content));
  });
});

describe('Snapshot Testing', () => {
  test('Required Props', () => {
    setup();
    expect(modal).toMatchSnapshot();
  });

  test('Optional Props', () => {
    setup(
      true, true,
      {
        okButtonText: 'Awesome Ok Text',
        cancelButtonText: 'Awesome Cancel Text',
        modalType: 'warning',
      }
    );

    expect(modal).toMatchSnapshot();
  });

  test('Open and simple modal', () => {
    setup(true, true);
    expect(modal).toMatchSnapshot();
  });
});