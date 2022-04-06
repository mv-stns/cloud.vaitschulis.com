import React, { Component } from 'react'
import { FetchImage } from 'random-image-unsplash'

export default class Projects extends Component {

    render() {
        return (
            <>
              <div className="relative flex w-full gap-6 overflow-x-auto snap-x pb-14">
                <div className="snap-center shrink-0">
                  <div className="w-4 shrink-0 sm:w-48" />
                </div>
                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <img className="h-[540px] bg-white rounded-lg shadow-xl shrink-0 w-[800px]" src={FetchImage} />
                </div>    
                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <img className="h-[540px] bg-white rounded-lg shadow-xl shrink-0 w-[800px]" src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>    
                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <img className="h-[540px] bg-white rounded-lg shadow-xl shrink-0 w-[800px]" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <img className="h-[540px] bg-white rounded-lg shadow-xl shrink-0 w-[800px]" src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <img className="h-[540px] bg-white rounded-lg shadow-xl shrink-0 w-[800px]" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <img className="h-[540px] bg-white rounded-lg shadow-xl shrink-0 w-[800px]" src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <img className="h-[540px] bg-white rounded-lg shadow-xl shrink-0 w-[800px]" src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
                </div>
                <div className="snap-center shrink-0">
                  <div className="w-4 shrink-0 sm:w-48" />
                </div>
              </div>


            </>
        )
    }
}
