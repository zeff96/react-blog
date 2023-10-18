import React from 'react';

const CreatePostModal = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='myModal' id='myModal'>
      <div className='modal-header'>
        <h2>Add new Post</h2>
        <span>&#10060;</span>
      </div>
      <div className='modal-body'>
        <AddPostForm />
      </div>
    </div>
  );
};

export default CreatePostModal;
