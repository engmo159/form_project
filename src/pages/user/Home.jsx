import { Typography, Card } from '@material-tailwind/react'
const Home = () => {
  return (
    <div className='text-center'>
      <h1>Home</h1>
      <div className='mx-auto max-w-screen-md py-12'>
        <Card className='mb-12 overflow-hidden'>
          <img
            alt='nature'
            className='h-[32rem] w-full object-cover object-center'
            src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80'
          />
        </Card>
        <Typography
          variant='h2'
          className='mb-2 text-blue-gray-800 dark:text-white'
        >
          What is Material Tailwind
        </Typography>
        <Typography className='font-normal text-blue-gray-800 dark:text-white'>
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div>
    </div>
  )
}

export default Home
