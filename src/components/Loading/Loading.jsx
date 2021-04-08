import s from './Loading.module.css';

const Loading = () => {
  return (
    <div className={s.loader}>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBar}></div>
      <div className={s.loaderBall}></div>
    </div>
  );
};

export default Loading;
