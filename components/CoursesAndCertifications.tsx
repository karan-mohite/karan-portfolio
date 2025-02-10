
"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Award, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InternalModifier } from 'react-day-picker';

const coursesAndCertifications = [
	{
		title: 'Java Programming Language',
		provider: 'VJTech Academy',
		date: 'March 2023',
		type: 'Certification',
		link: 'https://drive.google.com/file/d/1oFf-n-hKOHmRJxfV6sRD3UVAWp-QV530/view?usp=sharing'
	},

	{
		title: 'AdvanceJava Programming Language ',
		provider: 'VJTech Academy',
		date: 'June 2024',
		type: 'Course',
		link: 'https://drive.google.com/file/d/1bnq6yTazeId2eAPVwrerUIzQI8S3sTIB/view?usp=sharing'
	},
	
	{
		title: 'JavaScript Fundamentals',
		provider: 'Great Stack',
		date: 'january 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/1SRcrXG-R_VRQ_0ClFMq1QYZvmNzSaTdo/view?usp=sharing'
	},
	{
		title: 'Anjular Basics',

		provider: 'Simpli Learn',
		date: 'january 2025',
		type: 'Course',
		link: 'https://drive.google.com/file/d/1hqXo9Eyyj8k_yBKpR3M-uLugRT9mHakf/view?usp=sharing'
	}
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
