import Block from './block';
import cn from 'classnames';

export default function StepBlocks({blocks, betweenOffset}) {
  return (
    <div className={cn('space-y-12', {
      'lg:-space-y-16': betweenOffset === '-16'
    })}>
      {blocks.map(({title, text, slides}, index) => (
        <Block key={title} title={title} text={text} slides={slides} number={index + 1} />
      ))}
    </div>
  );
}