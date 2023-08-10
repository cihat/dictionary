'use client';

import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Container from "../ui/container";
import { useWord } from "@/store/useWord";
import YouglishWidget from "./youglish";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  wordCount: z.coerce.number().min(1).max(20),
  wordLength: z.coerce.number().min(1).max(30),
  firstLetter: z.string().length(1),
  alphabetize: z.boolean(),
})

const waitingTime: number = 3000;
let countNullWords = 0;


export default function Words() {
  const { words, setRandomWords } = useWord();
  const [word, setWord] = useState('')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
    defaultValues: {
      wordCount: 12,
      wordLength: 6,
      firstLetter: "m",
      alphabetize: true
    },
  });
  const [waiting, setWaiting] = useState(false);
  const { toast } = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!words || words?.length === 0) {
      toast({
        title: "No words found",
        description: "Please try again",
        action: <ToastAction altText="Try again" onClick={form.handleSubmit(onSubmit)}>Try again</ToastAction>,
      })

      ++countNullWords;
      if (countNullWords > 3) {
        toast({
          title: "Please change your search criteria",
          description: "Please check your search criteria and try again",
          action: <ToastAction altText="Try again" onClick={form.handleSubmit(onSubmit)}>Try again</ToastAction>,
        })
        countNullWords = 0;
      }
    }

    setWaiting(true);
    setRandomWords(values.wordCount, values.wordLength, values.firstLetter, values.alphabetize)
    setTimeout(() => { setWaiting(false); }, waitingTime)
  }

  // useEffect(() => {
  //   setRandomWords(12, 6, "m", true);
  // }, [])

  useEffect(() => {
    if (!words || words.length === 0) {
      setWaiting(false);
      toast({
        title: "No words found",
        description: "Please try again",
        action: <ToastAction altText="Try again" onClick={form.handleSubmit(onSubmit)}>Try again</ToastAction>,
      })
      countNullWords++;
    }

  }, [words])

  return (
    <Container as="main" size="full" className="flex sm:flex-row flex-col justify-between sm:justify-evenly min-h-[600px]">
      <div className="flex flex-col sm:w-[50%] pr-0 sm:pr-4 3xl:pr-0 mb-6 sm:mb-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <FormField
              control={form.control}
              name="wordCount"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Word Count</FormLabel>
                  <FormControl>
                    <Input placeholder="Word Count" {...field} />
                  </FormControl>
                  <FormDescription>
                    How many words do you want to generate?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wordLength"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Word Length</FormLabel>
                  <FormControl>
                    <Input placeholder="Word Length" {...field} />
                  </FormControl>
                  <FormDescription>
                    How long do you want the words to be?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="firstLetter"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>First Letter</FormLabel>
                  <FormControl>
                    <Input placeholder="First Letter" {...field} />
                  </FormControl>
                  <FormDescription>
                    What letter do you want the words to start with?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alphabetize"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="mr-2">Alphabetize</FormLabel>
                  <FormControl>
                    <Checkbox checked={true} />
                  </FormControl>
                  <FormDescription>
                    Do you want the words to be alphabetized?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={waiting} className="disabled:cursor-not-allowed">
              Submit
            </Button>
          </form>
        </Form>
        <br />

        <h1 className="font-bold text-lg mb-2">Words</h1>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {words ? words?.map((word, index) => (
            <li key={index}>
              <Button onClick={() => setWord(word)}>{word}</Button>
            </li>
          )) :
            <span className="w-52">No words found</span>}
        </ul>
      </div>

      <YouglishWidget className="flex-grow mt-4 sm:mt-0 sm:max-w-[50%] sm:ml-auto items-center" word={word} firstLetter={form.getValues('firstLetter')} />
    </Container>
  )
}

