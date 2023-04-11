import React from 'react';
import NewBanner from '../NewBanner/NewBanner';

const Blog = () => {
    return (
        <div>
            <NewBanner></NewBanner>
            <div className='w-9/12 mx-auto my-12'>
                <h2 className='text-3xl font-semibold'>1. When should you use context API?</h2>
                <p className='text-xl'><span className='text-2xl font-medium text-purple-700'>Answer: </span>The React Context API is useful when you need to pass data through the component tree without having to manually pass the props down through each level of the tree.<br></br>

                    Here are some situations where using the Context API can be particularly helpful:<br></br><br></br>

                    i. When you have data that needs to be accessed by many components that are nested at different levels in the component tree.<br></br><br></br>

                    ii. When you have deeply nested components where passing props through each level can become tedious and lead to prop drilling.<br></br><br></br>

                    iii. When you have data that needs to be shared between components that are not directly connected in the component tree.<br></br><br></br>

                    iv. When you have data that needs to be updated frequently, and you want to avoid unnecessary re-renders caused by passing props down through many levels of the component tree.<br></br><br></br>

                    Overall, the Context API can help simplify your code and make it more efficient by reducing the need for prop drilling and providing a centralized location for managing state across your application.</p>
            </div>

            <div className='w-9/12 mx-auto my-12'>
                <h2 className='text-3xl font-semibold'>2. What is a custom hook?</h2>
                <p className='text-xl'><span className='text-2xl font-medium text-purple-700'>Answer: </span>A custom hook in React is a JavaScript function that uses one or more built-in React hooks, and possibly other functions or state, to encapsulate reusable logic that can be shared across multiple components in a React application.<br></br>

                    Custom hooks allow developers to extract common logic from components and reuse it in a modular way. This can help to reduce code duplication and improve the readability and maintainability of the application.<br></br><br></br>
                </p>
            </div>

            <div className='w-9/12 mx-auto my-12'>
                <h2 className='text-3xl font-semibold'>3. What is useRef?</h2>

                <p className='text-xl'><span className='text-2xl font-medium text-purple-700'>Answer: </span>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .<br></br>

                    There are only three possibilities when we can use Refs in our component -<br></br>

                    i. Managing focus, text selection, or media playback. <br></br>
                    ii. Integrating with third-party DOM libraries. <br></br>
                    iii. Triggering imperative animations. <br></br><br></br>
                    We can use the ref attribute to access the DOM API. We can get the value of an input element and, at the same time, trigger methods like a focus() with it.<br></br><br></br>

                </p>
            </div>

            <div className='w-9/12 mx-auto my-12'>
                <h2 className='text-3xl font-semibold'>4. What is useMemo?</h2>

                <p className='text-xl'><span className='text-2xl font-medium text-purple-700'>Answer: </span>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.<br></br>

                The basic purpose of the useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program.<br></br>

                We want to make sure that only the components that witness a change in their values are re-rendered; otherwise, there’s no need to re-render the component and slow down the performance.<br></br>

                Only re-rendering certain components will make your program efficient and improve the overall performance of your React app.<br></br><br></br>

                </p>
            </div>


        </div>
    );
};

export default Blog;