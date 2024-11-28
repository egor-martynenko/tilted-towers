'use client';
import { Button } from '@/shared/ui/button/Button';
import { useLanguageStore } from '@/shared/store/languageStore';

const Hero = () => {
  const { t } = useLanguageStore();

  return (
    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-8 bg-hero bg-cover">
      <h1 className="mt-28 text-6xl font-semibold max-w-3xl">{t('welcome')}</h1>
      <p className="max-w-3xl mt-10 text-2xl font-semi">{t('description')}</p>
      <p className="max-w-3xl mt-10 text-2xl font-semi mb-16">
        {t('subDescription')}
      </p>
      <Button>{t('shopNow')}</Button>
    </section>
  );
};

export default Hero;
