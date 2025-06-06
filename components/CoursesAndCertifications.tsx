
"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Award, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InternalModifier } from 'react-day-picker';

const coursesAndCertifications = [
	{
		title: 'C Language',
		provider: 'VJTech Academy',
		date: 'April 2021',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/1kR9wIdDsaPEYkGeglAinVLmcqpvTmg3B/view?usp=sharing'
	},

	{
		title: 'C++ Language',
		provider: 'VJTech Academy',
		date: 'Octomber 2021',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/12BbWgus0hgDox-ni6LiNrWM3ROA0_2CW/view?usp=sharing'
	},

	{
		title: 'Core Java',
		provider: 'VJTech Academy',
		date: 'March 2022',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/179L51u-UiQi7tKE0z4n99e9SZnB14K96/view?usp=sharing'
	},

	{	
		title: 'Advanced Java ',
		provider: 'VJTech Academy',
		date: 'June 2022',
		type: 'Course',
		link: 'https://drive.google.com/file/d/16lwY9NhbmStWwj_yS1krLwLfPT8F0He9/view?usp=sharing'
	},

	{
		title: 'Python',
		provider: 'VJTech Academy',
		date: 'January 2023',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/12EUYLn1GrIEj17sdgGHQJBsCQ8QE1bDP/view?usp=sharing'
	},
    {
		title: 'PHP',
		provider: 'VJTech Academy',
		date: 'June 2023',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/12B66U6LTLp77T1LN1cmBYliUX7Ep2KXG/view?usp=sharing'
	},
   {
		title: 'VB.NET',
		provider: 'VJTech Academy',
		date: 'Sepetember 2023',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/12D5865cjhAQT_KKo7h2sm7q8Dr7ejjaw/view?usp=sharing'
	},

	{
		title: 'Linux',
		provider: 'VJTech Academy',
		date: 'November 2023',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/1jpbdA-WxzopNMCDLwd0wlutzxjA25EzV/view?usp=sharing'
	},
	{
		title: 'Angular Basics',
		provider: 'Simpli Learn',
		date: 'january 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/1780q9k-Cwp8uMFsJUnIKdR6DoAeh-Ok7/view?usp=sharing'
	},
	{
		title: 'JavaScript Fundamentals',
		provider: 'Great Stack',
		date: 'January 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/16y2tt5rDkG_xjpAqTUulXXTLq2aU53H0/view?usp=sharing'
	},
	{
		title: 'React Hooks',
		provider: 'Great Stack',
		date: 'January 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/16y2tt5rDkG_xjpAqTUulXXTLq2aU53H0/view?usp=sharing'
	},
	{
		title: 'AWS Cloud Practitioner Essentials',
		provider: 'AWS',
		date: 'March 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/1999_EnLLcLGorg8_5r4ai2zS7dNxqzT2/view?usp=sharing'
	},
	{
		title: 'Artificial Intelligence for All',
		provider: 'Infosys Springboard',
		date: 'April 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/19I3VWFK0uuSAg74A9nGGvkPbw4_uT9C9/view?usp=sharing'
	},
	{
		title: 'Gen AI And Chat GPT Application in the Industry',
		provider: 'ExcelR',
		date: 'January 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/19RrYW_Izb9v-DF_tuzFveWxk4xzQnUqV/view?usp=sharing'
	},
	{
		title: 'Data Science And Analytics',
		provider: 'HP Life',
		date: 'January 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/19hNHmvtFv4oekxi5DYdfdQ1RUUB93Izm/view?usp=sharing'
	},
	{
		title: 'Cyber Security',
		provider: 'ExcelR',
		date: 'April 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/19S22I9U4py8Mq9Se5xIJlZA5cH7Fb4eL/view?usp=sharing'
	},
	{
		title: 'Business Intelligence Using Advanced Excel And Power BI',
		provider: 'ExcelR',
		date: 'February 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/19WiSWdZ93O0A2F1BLU2OcQQVZoOXDpwS/view?usp=sharing'
	},
	{
		title: 'DSA Mastery With Java',
		provider: 'ExcelR',
		date: 'January 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/19cP10RMGekszm0b2zhaN7dMrnVa6ZSnZ/view?usp=sharing'
	},
];

export default function CoursesAndCertifications() {

  const navigateUser = (link: string) => () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

	return (
		<section id="courses" className="py-20 bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4">
				<Card className="bg-gray-50 dark:bg-gray-900 shadow-lg border-none transition-colors duration-300">
					<CardHeader>
						<CardTitle className="text-3xl font-bold text-center text-red-600 dark:text-red-400">
							Courses & Certifications
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{coursesAndCertifications.map((item, index) => (
								<Card
									key={index}
									className="bg-white dark:bg-gray-800 border-t-4 border-red-500 dark:border-red-400 transition-colors duration-300"
								>
									<CardHeader>
										<CardTitle className="flex items-center text-lg font-semibold text-gray-800 dark:text-white h-12">
											{item.type === 'Course' ? (
												<BookOpen className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
											) : (
												<Award className="mr-2 h-5 w-5 text-red-600 dark:text-red-400" />
											)}
											{item.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="font-semibold text-gray-700 dark:text-gray-300">
											{item.provider}
										</p>
										<p className="text-gray-600 dark:text-gray-400 mb-4">{item.date}</p>
                 
										<Button
											onClick={navigateUser(item.link)}
											size="sm"
											className="w-full text-red-600 dark:text-red-400 border-red-600 dark:border-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-400 dark:hover:text-gray-900"
										>
											View Credential
                      </Button>
									</CardContent>
								</Card>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
