import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div class={css.load}>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);
