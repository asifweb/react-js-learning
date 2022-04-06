import React from 'react'
import { H3 } from './styled/h3'
import { H2 } from './styled/h2'
import SingleNewsGrid from './SingleNewsGrid'

const HomeNews = () => {
  return (
    <>
        <div className="news">
            <div className="row">
			<div className="col-md-6 news-left-grid">
                <H3>Don't be late,</H3>
				<H2>Book your ticket now!</H2>
				<h4>Easy, simple & fast.</h4>
				<a href="#"><i className="book"></i>BOOK TICKET</a>
				<p>Get Discount up to <strong>10%</strong> if you are a member!</p>
			</div>
			<div className="col-md-6 news-right-grid">
                <H3 right>News</H3>
                <SingleNewsGrid title="Lorem Ipsum Dolor Sit Amet" label="Nov 11 2014" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." />
                <SingleNewsGrid title="Lorem Ipsum Dolor Sit Amet" label="Nov 11 2014" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo." />
				<a className="more" href="#">MORE</a>
			</div>
			<div className="clearfix"></div>
            </div>
		</div>
    </>
  )
}

export default HomeNews