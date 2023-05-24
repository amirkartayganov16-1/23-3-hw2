import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [newText, setNewText] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => setPost(resp.data));
  }, [id]);

  const deletePost = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => navigate("/posts"));
  };

  const updatePost = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...post,
        title: newText
      })
      .then((resp) => {
        console.log("Пост успешно обновлен:", resp.data);
      })
      .catch((error) => {
        console.error("Ошибка при обновлении поста:", error);
      });
  };

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>

      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />

      <button onClick={updatePost}>Изменить</button>

      <button onClick={() => navigate(-1)}>Назад</button>
      <button onClick={deletePost}>Удалить</button>
    </div>
  );
};

export default SinglePost;
