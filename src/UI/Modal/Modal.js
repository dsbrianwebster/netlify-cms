import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  }

  render() {
    const { isOpen, children, className, onClose } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        closeTimeoutMS={300}
        className={{
          base: `nc-modal-body ${className || ''}`,
          afterOpen: 'nc-modal-body-opening',
        }}
        overlayClassName={{
          base: 'nc-modal-overlay',
          afterOpen: 'nc-modal-overlay-afterOpen',
          beforeClose: 'nc-modal-overlay-beforeClose',
        }}
      >
        {children}
      </ReactModal>
    );
  }
}