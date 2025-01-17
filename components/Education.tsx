import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Mail } from 'lucide-react';
import Link from 'next/link';

const educationData = [
	{
		degree: 'Bachelor of Science in Computer Engineering',
		school: 'PCETs Nutan Maharashtra Institute of Engineering and Technology(NMIET)',
		location: 'Pune, Maharashtra',
		year: '2023 - 2026',
		email: 'info@nmiet.edu.in'
	},
	{
		degree: 'Diploma in Computer Engineering',
		school: 'Shivnagar Vidya Prasak Mandal (SVPM)',
		location: 'Malegaon, Maharashtra',
		year: '2020 - 2023',
		email: 'info@svpm.edu.in'
	}
];

export default function Education() {
	return (
		<section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-green-600 dark:text-green-400 mb-12">Education</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{educationData.map((edu, index) => (
						<Card
							key={index}
							className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
						>
							<div className="h-2 bg-green-500 dark:bg-green-400" />
							<CardHeader className="pb-2">
								<CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-white">
									<GraduationCap className="mr-2 h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0" />
									<span className="truncate">{edu.degree}</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="font-semibold text-gray-700 dark:text-gray-300">{edu.school}</p>
								<div className="flex items-center text-gray-600 dark:text-gray-400">
									<Calendar className="mr-2 h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
									<span>{edu.year}</span>
								</div>
								<div className="flex items-center text-gray-600 dark:text-gray-400">
									<MapPin className="mr-2 h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
									<span>{edu.location}</span>
								</div>
								<div className="flex items-center text-gray-600 dark:text-gray-400">
									<Mail className="mr-2 h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
									<Link
										href={`https://mail.google.com/mail/?view=cm&fs=1&to=${edu.email}`}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 truncate"
									>
										{edu.email}
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
