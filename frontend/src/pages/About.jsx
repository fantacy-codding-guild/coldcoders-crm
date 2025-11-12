import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Cold Coders'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href=""></a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="">
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`mailto:`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
